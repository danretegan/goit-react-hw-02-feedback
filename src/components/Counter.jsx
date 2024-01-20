// Counter.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from './Button';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleIncrement = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;

    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div>
          <Button action={() => this.handleIncrement('good')}>Good</Button>
          <Button action={() => this.handleIncrement('neutral')}>
            Neutral
          </Button>
          <Button action={() => this.handleIncrement('bad')}>Bad</Button>
        </div>

        <p>
          <strong>Statistics:</strong>
        </p>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {totalFeedback}</div>
        <div>Positive feedback: {positiveFeedbackPercentage}%</div>
      </>
    );
  }
}

Counter.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default Counter;
