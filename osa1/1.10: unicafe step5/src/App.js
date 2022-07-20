import { useState } from 'react';

// Ensin, luon Display komponentti joka suorittaa text div:in.

const Display = props => <div>{props.text}</div>;

// Eriytetään statsit.

const StatisticLine = props => <p>{props.text} feedback: {props.value}</p>;

// Sitten, luodaan näppäinten komponentti

const Button = (props) => (
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
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total" value={props.total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Percent positive" value={positive + " %"} />
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

      <Button handleClick={() => {
        setGood(good + 1)
        setTotal(total + 1)
        }} text="Good" />

      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
        }} text="Neutral" />

      <Button handleClick={() => {
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