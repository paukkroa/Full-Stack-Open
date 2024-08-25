import { useState } from 'react'

// Random number generator
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayVotes = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        has {props.value} votes
      </p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdotesLength = anecdotes.length
  const [votes, setVotes] = useState(new Uint8Array(anecdotesLength));
  console.log(votes)

  const [selected, setSelected] = useState(0)

  const handleRandomClick = () => {
    const randomInt = getRandomInt(0, anecdotesLength)
    console.log(randomInt); // e.g., 3
    setSelected(randomInt)
  }

  const handleVoteClick = () => {
    const copy = [...votes];
    console.log('Votes before', copy)
    copy[selected] += 1;
    console.log('Votes after', copy)
    setVotes(copy);
  }

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <DisplayVotes value={votes[selected]} />
      <div>
        <Button handleClick={handleVoteClick} text='Vote' />
        <Button handleClick={handleRandomClick} text='Next anecdote' />
      </div>
    </div>
  )
}

export default App