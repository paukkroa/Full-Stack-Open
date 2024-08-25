  const CourseHeader = (props) => {
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
        <CourseHeader name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

  export default Course