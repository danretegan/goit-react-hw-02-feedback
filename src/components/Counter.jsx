// Counter.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <Button action={() => this.handleIncrement('good')}>Good</Button>
          <Button action={() => this.handleIncrement('neutral')}>
            Neutral
          </Button>
          <Button action={() => this.handleIncrement('bad')}>Bad</Button>
        </div>

        <p>Statistics:</p>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
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
