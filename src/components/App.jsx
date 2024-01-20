// App.jsx
import React, { Component } from 'react';
import styles from './App.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
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
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage =
      totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

    return (
      <div className={styles.container}>
        <p className={styles.title}>Please leave a feedback</p>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleIncrement}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
