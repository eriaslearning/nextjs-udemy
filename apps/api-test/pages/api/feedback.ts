import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'apps', 'api-test', 'data', 'feedback.json');
}

export function extractFeedback(filePath: any) {
  const fileData: any = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const fakeId = new Date().toString();

    const newFeedback = {
      id: fakeId,
      email: email,
      feedbackText: feedbackText,
    };

    // store in a database
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
