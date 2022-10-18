import { Feedback } from 'components/Feedback/Feedback';

export const App = () => {
  return (
    <>
      <Feedback
        feedbackTitle="Leave feedback"
        statisticTitle="Statistic"
        feedbackOptions={['Good', 'Neutral', 'Bad']}
        percentageOptions={['Good', 'Bad']}
      />
    </>
  );
};
