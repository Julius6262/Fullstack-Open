import React, { useState } from 'react';

// Button component for feedback submission
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// StatisticLine component for displaying a single statistic
const StatisticLine = ({ label, value }) => (
  <p>
    {label} {value}
  </p>
);

// Pick randon anecdote
const RandomAnecdotes = ({anecdotes, selected}) => {
  return(
    <div>
      <p>{anecdotes[selected]}</p>
    </div>
  );
};

const Vote = ({selected, votes}) => {
  return(
    <div>
      <p>
        has {votes[selected]} votes
      </p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleGoodClick = () => setGoodCount(goodCount + 1);
  const handleNeutralClick = () => setNeutralCount(neutralCount + 1);
  const handleBadClick = () => setBadCount(badCount + 1);
  const handleSelectedClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    console.log("This is randomindex" + Math.floor(Math.random() * (anecdotes.length + 1)))  // we round down, so to include the full lenght of the array we add 1
  };
const handleVoteClick = () => {
  const copy = [...votes];
  copy[selected] += 1
  setVotes(copy)
  console.log(votes)
};

  const total = goodCount + neutralCount + badCount;
  const average = (goodCount * 1 + neutralCount * 0 + badCount * -1) / total;
  const positivePercent = (goodCount / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <br></br>
      <br></br>
      <Button handleClick={handleSelectedClick} text="next anecdote" />
      <Button handleClick={handleVoteClick} text = "vote" />
      <RandomAnecdotes anecdotes={anecdotes} selected={selected}/>
      <Vote selected={selected} votes={votes}/>
      <h2>Statistics</h2>
    {total > 0 ? (
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td><StatisticLine value={goodCount} /></td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td><StatisticLine value={neutralCount} /></td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td><StatisticLine value={badCount} /></td>
          </tr>
          <tr>
            <td>Total:</td>
            <td><StatisticLine value={total} /></td>
          </tr>
          <tr>
            <td>Average:</td>
            <td><StatisticLine value={average.toFixed(1)} /></td>
          </tr>
          <tr>
            <td>Positive :</td>
            <td><StatisticLine value={`${positivePercent.toFixed(1)}%`} /></td>
          </tr>
        </tbody>
      </table>
    ) : (
      <p>No feedback given</p>
    )}
  </div>
);
};
export default App;