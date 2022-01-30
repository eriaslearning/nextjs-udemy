import React, { useState, Fragment } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

export interface FeedBackPageProps {
  feedbackItems: any;
}

function FeedBackPage(props: any) {
  const [feedbackData, setFeedbackData] = useState<any>();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  const { feedbackItems } = props;
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.feedbackText}</p>}
      <ul>
        {feedbackItems.map((item: any) => (
          <li key={item.id}>
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              {item.email}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedBackPage;
