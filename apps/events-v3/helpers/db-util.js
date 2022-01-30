import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://erias89347:LLCtyk00E8hQgRCF@cluster0.f7bqi.mongodb.net/events?retryWrites=true&w=majority'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = await client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
