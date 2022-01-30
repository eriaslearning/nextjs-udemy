import { MongoClient, ObjectId } from 'mongodb';
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

// async function connectDatabase() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://erias89347:LLCtyk00E8hQgRCF@cluster0.f7bqi.mongodb.net/events?retryWrites=true&w=majority'
//   );
// }

// async function insertDocument(client, document) {
//   const db = client.db();
//   const result = await db.collection('comments').insertOne(document);
//   return result;
// }

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: 'Connexting to the database failed' });
    return;
  }

  // const client = await connectDatabase();

  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      client.close();
      return;
    }

    const newComment = {
      _id: new ObjectId(),
      email,
      name,
      text,
      eventId,
    };
    try {
      const result = await insertDocument(client, 'comments', newComment);
      console.log(result);
    } catch (err) {
      res.status(500).json({ message: 'Inserting comment failed!' });
      client.close();
    }

    // const result = await insertDocument(client, newComment);
    // console.log(result);
    res
      .status(201)
      .json({ message: 'Added comment successfully', comment: newComment });
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: 'Getting comments failed!' });
    }
  }

  client.close();
}

export default handler;
