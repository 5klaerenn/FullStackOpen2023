import { useState } from "react";

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>);

const Statistics = (props) => {

  const { good, neutral, bad } = props;

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good + 0 + (bad * -1)) / total;
  const percentage = (good / total) * 100;

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine option={good} text1="good" />
          <StatisticLine option={neutral} text1="neutral" />
          <StatisticLine option={bad} text1="bad" />
          <StatisticLine option={average} text1="average" />
          <StatisticLine option={percentage} text1="positive" text2="%" />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text1, option, text2 = "" }) => {
  return (
    <>
      <tr>
        <td>{text1}</td>
        <td>{option}</td>
        <td>{text2}</td>
      </tr>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>

      <div>
        <h1>Statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </>
  );

}

export default App;