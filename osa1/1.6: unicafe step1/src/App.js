import { useState } from 'react';

// Ensin, luon Display komponentti joka suorittaa text div:in.

const Display = props => <div>{props.text}</div>;

// Sitten, luodaan näppäinten komponentti

const Buttons = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

// Stats:in lopputulos.

const Statistics = (props) => (
  <div>
    <h1>Statistics:</h1>
    <p>Good feedback: {props.good}</p>
    <p>Neutral feedback: {props.neutral}</p>
    <p>Bad feedback: {props.bad}</p>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display />
      <h1>Please give us your feedback!</h1>
      <Buttons handleClick={() => setGood(good + 1)} text="Good" />
      <Buttons handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Buttons handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

export default App;
