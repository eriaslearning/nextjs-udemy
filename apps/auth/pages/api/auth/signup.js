import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import { hash } from 'br';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - The password should also be at least sevent (7) characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  db.collection('users').insertOne({
    _id: new ObjectId(),
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Successfully created user!' });
}

export default handler;
