import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Email is invalid' });
      return;
    }
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connection to the database failed' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  } else {
    res.status(400).json({ message: 'Only POST requests are allowed' });
  }
}

export default handler;
