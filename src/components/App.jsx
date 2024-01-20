import Counter from './Counter';

export const App = () => {
  return (
    <div
      style={{
        alignItems: 'center',
        color: '#010101',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <p>Please leave a feedback</p>
      <Counter />
    </div>
  );
};
