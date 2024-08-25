const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Subheader = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
        {props.name}
      </h2>
    </div>
  )
}


const Part = ({part}) => {
  console.log(part)
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log(totalExercises)
  return (
    <div>
      <b>
        Number of exercises {totalExercises}
      </b>
    </div>
  )
}

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      <Subheader name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header name='My fancy header'/>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App