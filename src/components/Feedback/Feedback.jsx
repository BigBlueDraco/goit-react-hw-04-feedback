import PropTypes from 'prop-types';
import { useState } from 'react';

import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import React from 'react';

export const Feedback = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodChange = event => {
    setGood(good + 1);
  };
  const handleNeutralChange = event => {
    setNeutral(neutral + 1);
  };
  const handleBadChange = event => {
    setBad(bad + 1);
  };

  const goodPercentage = id => {
    const total = good + neutral + bad;
    if (total <= 0) return 0;
    return Math.round((good / total) * 10000) / 100;
  };

  return (
    <>
      <Section title="Leave feedback">
        <div className="feedback-wrap">
          <Button func={handleGoodChange} text="Good" />
          <Button func={handleNeutralChange} text="neutral" />
          <Button func={handleBadChange} text="bad" />
        </div>
      </Section>

      <Section title="Statistic">
        <Statistics
          name={'good'}
          good={good}
          neutral={neutral}
          bad={bad}
          percentage={goodPercentage()}
        />
      </Section>
    </>
  );
};
