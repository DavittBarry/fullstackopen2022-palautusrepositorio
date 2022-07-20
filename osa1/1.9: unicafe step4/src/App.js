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

const Statistics = (props) => {

  if (props.total === 0) {
    return(
      <div>
        <h1>Statistics:</h1>
        <p>Stats are shows when feedback is given.</p>
      </div>
    )
    }
    else {

  // Teen merkkijonoja missä on kaikki forumulat ennen kun kutsun niitä. 

  const totalgoodbad = props.good + props.bad + props.neutral;
  const average = Math.floor(((props.good - props.bad) / totalgoodbad) * 100) / 100;
  const positive = Math.floor((props.good / totalgoodbad) * 100);
  
  return(
    <div>
      <h1>Statistics:</h1>
      <p>Good feedback: {props.good}</p>
      <p>Neutral feedback: {props.neutral}</p>
      <p>Bad feedback: {props.bad}</p>
      <p>Total feedback: {props.total}</p>
      <p>Average: {average}</p>
      <p>Percent positive: {positive} %</p>
    </div>
  );
  };
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <Display />

      <h1>Please give us your feedback!</h1>

      <Buttons handleClick={() => {
        setGood(good + 1)
        setTotal(total + 1)
        }} text="Good" />

      <Buttons handleClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
        }} text="Neutral" />

      <Buttons handleClick={() => {
        setBad(bad + 1)
        setTotal(total + 1)
      }} text="Bad" />

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
      />
    </div>
  )
};

export default App;