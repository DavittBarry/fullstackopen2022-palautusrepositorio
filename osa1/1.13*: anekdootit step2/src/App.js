import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Tämä luo React tilaa taulukkona. 
  const newVotes = [...votes]

  const handleVotes = () => {
    newVotes[selected] += 1;
    setVotes(newVotes);
    console.log(newVotes)
  };

  const handleClick = () => {
    setSelected(randomNumberInRange(0, 6));
  };

// randomNumberInRange luo random numeron.

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

// handleClick funktio hoittaa clickin ominaisuuksia.

  return (
    <div>
      <h1>Random anecdote generator:</h1>
      <p>{anecdotes[selected]}</p>
      <p>Current anecdote vote count: {newVotes[selected]}</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleClick}>Generate random anecdote</button>
    </div>
  );
};

export default App;
