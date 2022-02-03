import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import { hash } from 'br';

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
    email: email,
    password: hashedPassword,
  });
}

export default handler;
