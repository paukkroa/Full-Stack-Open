import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.text}
      </h1>
    </div>
  )
}

const StatisticRow = props => <tr> 
    <td>{props.text}</td> 
    <td>{props.value}</td> 
    <td>{props.unit}</td>
  </tr> 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const calculateAverage = (num, denom) => {
  if (denom === 0) return 0
  return num / denom
}

const calculatePercentage = (num, denom) => {
  const avg = calculateAverage(num, denom)
  return avg * 100
};

const Statistics = (props) => {
  console.log(props)
  const total = props.good + props.neutral + props.bad
  const binarySum = props.good - props.bad
  console.log('Total', total)
  console.log('Binary sum', binarySum)

  if (total === 0) return <div><p>No feedback given</p></div>

  return (
    <table>
      <tbody>
        <StatisticRow text='Good' value={props.good}/>
        <StatisticRow text='Neutral' value={props.neutral}/>
        <StatisticRow text='Bad' value={props.bad}/>
        <StatisticRow text='Total' value={total}/>
        <StatisticRow text='Average' value={calculateAverage(binarySum, total)}/>
        <StatisticRow text='Positives' value={calculatePercentage(props.good, total)} unit='%'/>
      </tbody>
    </table>
  )
}

const App = () => {
  const header = 'Give feedback'
  const divider = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [binarySum, setBinarySum] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setBinarySum(binarySum + 1)
    console.log('Good', good + 1)
    console.log('Total', total + 1)
    console.log('BinarySum', binarySum + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log('Neutral', neutral + 1)
    console.log('Total', total + 1)
    console.log('BinarySum', binarySum)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setBinarySum(binarySum - 1)
    console.log('Bad', bad + 1)
    console.log('Total', total + 1)
    console.log('BinarySum', binarySum - 1)
  }


  return (
    <div>
      <Header text={header}/>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <Header text={divider}/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
export default App