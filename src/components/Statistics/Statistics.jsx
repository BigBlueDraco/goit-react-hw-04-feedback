import React from 'react';
import PropTypes from 'prop-types';

import s from 'components/Statistics/statistics.module.scss';

export const Statistics = ({ good, neutral, bad, percentage }) => {
  return (
    <>
      <>
        {good + neutral + bad !== 0 ? (
          <>
            <div className={s.statisticWrap}>
              <StatisticItem name="good" value={good} />
              <StatisticItem name="neutral" value={neutral} />
              <StatisticItem name="bad" value={bad} />
            </div>
            <div className={s.percentageWrap}>
              <StatisticPercent name="good" value={percentage} />
            </div>
          </>
        ) : (
          <span>No feedback</span>
        )}
      </>
    </>
  );
};

const StatisticItem = ({ name, value }) => {
  return (
    <span>
      {name}: {value}
    </span>
  );
};
const StatisticPercent = ({ name, value }) => {
  return (
    <span>
      {name} feedback percentage: {value}%
    </span>
  );
};

Statistics.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  percentage: PropTypes.number,
};
