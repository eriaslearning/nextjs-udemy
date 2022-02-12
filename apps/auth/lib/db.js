import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  // Need to add a try catch block to handle with errors
  const client = await MongoClient.connect(
    'mongodb+srv://erias87983:XQWQAZjpZvPsZbcd@cluster0.f7bqi.mongodb.net/auth?retryWrites=true&w=majority'
  );
  return client;
}
