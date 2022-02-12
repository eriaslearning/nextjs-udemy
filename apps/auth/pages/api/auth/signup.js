import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;
  console.log(email);

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid input!' });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    _id: new ObjectId(),
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user successfully!' + result });
}

export default handler;
