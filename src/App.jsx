import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Descriptions from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const getFeedback = () => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  };
  const [feedback, setFeedback] = useState(getFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const initialFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(initialFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentange =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Descriptions />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentange={positivePercentange}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
