import fs from 'fs';
import path from 'path';

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;
    
    const fakeId = (new Date()).toString();

    const newFeedback = {
      id: fakeId,
      email: email,
      feedbackText: feedbackText,
    };

    // store in a database
    const filePath = path.join(process.cwd(), 'apps', 'api-test', 'data', 'feedback.json');
    const fileData: any = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'Hello World' });
  }
}

export default handler;
