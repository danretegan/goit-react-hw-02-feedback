// App.jsx

import Counter from './Counter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Please leave a feedback</p>
      <Counter />
    </div>
  );
};
