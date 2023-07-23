import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    await prisma.user.create({
      data: {
        email,
      },
    });

    return res.status(201).json({ message: "Successfully registered. We'll get back to you soon!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
}
