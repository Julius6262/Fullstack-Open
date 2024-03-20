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

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGoodClick = () => setGoodCount(goodCount + 1);
  const handleNeutralClick = () => setNeutralCount(neutralCount + 1);
  const handleBadClick = () => setBadCount(badCount + 1);

  const total = goodCount + neutralCount + badCount;
  const average = (goodCount * 1 + neutralCount * 0 + badCount * -1) / total;
  const positivePercent = (goodCount / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

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