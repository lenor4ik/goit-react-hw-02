import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useEffect, useState } from 'react';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

const initialFeedbacks = {
    good: 0,
    neutral: 0,
    bad: 0
  }; 

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbacksValues");
      const parsedFeedbacks = JSON.parse(stringifiedFeedbacks) ?? initialFeedbacks;
      return parsedFeedbacks;
    });

const updateFeedback = (feedbackType) => {
  setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
}

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  useEffect(() => {
    localStorage.setItem("feedbacksValues", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App
