import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Display = ({ counter }) => <div><p>{counter}</p></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const course = {
    name: 'Counter :D'
  }
  
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  return (
    <div>
      <Header course={course.name}/>

      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='Add'
      />
      <Button
        handleClick={setToZero}
        text='Reset'
      />     
      <Button
        handleClick={decreaseByOne}
        text='Subtract'
      />  
    </div>
  )
}

export default App