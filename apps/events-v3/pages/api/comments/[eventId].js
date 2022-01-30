function handler(req, res) {
  const eventId = req.query.eventId;

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
      res.status(422).json({ message: 'Invalid imput' });
      return;
    }

    const newComment = {
      id: new Date().toString(),
      email,
      name,
      text,
    };
    console.log(email, name, text);
    res
      .status(201)
      .json({ message: 'Added comment successfully', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'erias', text: 'The first comment' },
      { id: 'c2', name: 'erias2', text: 'The second comment' },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
