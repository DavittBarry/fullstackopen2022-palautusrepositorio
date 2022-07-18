import { useState } from 'react';

const Display = props => <div>{props.text}</div>;

const Buttons = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

const Statistics = (props) => (
  <div>
    <h1>Statistics:</h1>
    <p>Good feedback: {props.good}</p>
    <p>Neutral feedback: {props.neutral}</p>
    <p>Bad feedback: {props.bad}</p>
  </div>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display />
      <h1>Please give us your feedback!</h1>
      <Buttons handleClick={() => setGood(+1)} text="Good" />
      <Buttons handleClick={() => setNeutral(+1)} text="Neutral" />
      <Buttons handleClick={() => setBad(+1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={neutral} />
    </div>
  )
};

export default App;
