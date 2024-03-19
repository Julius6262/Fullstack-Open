import React, { useState } from 'react';

const Display = (props) => {
  return (
    <div>
      <p>Good: {props.goodCount}</p>
      <p>Neutral: {props.neutralCount}</p>
      <p>Bad: {props.badCount}</p>
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const setToGoodCount = (newGoodCount) => {
    console.log('Good count now', newGoodCount);
    setGoodCount(newGoodCount);
  };

  const setToNeutralCount = (newNeutralCount) => {
    console.log('Neutral count now', newNeutralCount);
    setNeutralCount(newNeutralCount);
  };

  const setToBadCount = (newBadCount) => {
    console.log('Bad count now', newBadCount);
    setBadCount(newBadCount);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGoodCount(goodCount + 1)} text="Good" />
      <Button handleClick={() => setToNeutralCount(neutralCount + 1)} text="Neutral" />
      <Button handleClick={() => setToBadCount(badCount + 1)} text="Bad" />
      <h2>Statistics</h2>
      <Display goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} />
    </div>
  );
};

export default App;

