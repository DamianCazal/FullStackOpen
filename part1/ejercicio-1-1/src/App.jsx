function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  function Header({ course }) {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  const Content = ({ parts }) => {
    return (
      <>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </>
    )
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.part.name} {props.part.exercises}</p>
      </>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
