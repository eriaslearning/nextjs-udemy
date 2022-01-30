import { useRef, useState } from 'react';

import styles from './index.module.css';

export function Index() {
  const [feedbackItems, setFeedbackItems] = useState<any>();
  const emailInputRef = useRef<any>();
  const feedbackInputRef = useRef<any>();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response: any) =>
      response.json().then((data: any) => console.log(data))
    );
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback').then((response: any) =>
      response.json().then((data: any) => {
        setFeedbackItems(data.feedback);
      })
    );
  }

  return (
    <div>
      <h1>erias Form</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>View Feedback</button>
      <ul>
        {feedbackItems?.map((item: any) => (
          <>
            <li key={item.id}>{item.feedbackText}</li>
            <h1 key={item.email}>{item.email}</h1>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Index;
