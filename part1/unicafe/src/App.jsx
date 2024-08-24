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

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const header = 'Give feedback'
  const divider = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    console.log('Good before', good)
    setGood(good + 1)
    console.log('Good after', good + 1)
  }

  const handleNeutralClick = () => {
    console.log('Neutral before', neutral)
    setNeutral(neutral + 1)
    console.log('Neutral after', neutral + 1)
  }

  const handleBadClick = () => {
    console.log('Bad before', bad)
    setBad(bad + 1)
    console.log('Bad after', bad + 1)
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
      <div>
        <Display text='Good' value={good}/>
        <Display text='Neutral' value={neutral}/>
        <Display text='Bad' value={bad}/>
      </div>
    </div>
  )
}
export default App