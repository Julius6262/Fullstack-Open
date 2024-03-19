import React, { useState } from 'react';



// make arrow function to calculate total,average and positive procent

const Statistics = (props) => {
  let total = props.goodCount + props.neutralCount + props.badCount
  let average = (props.goodCount * 1 + props.neutralCount * 0 + props.badCount * -1) / total;
  let positiveProcent = (props.goodCount/total) * 100
  return(
 <div>
  <p>total {total}</p>
  <p>average {average} </p>
  <p>positive {positiveProcent} %</p>
  </div>
  );
};

const Display = (props) => {
  return (
    <div>
      <p>Good: {props.goodCount}</p>
      <p>Neutral: {props.neutralCount}</p>
      <p>Bad: {props.badCount}</p>
      {/* Could also call  Statistics here, so Display displayed all values*/}
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
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} />

    </div>
  );
};

export default App;

