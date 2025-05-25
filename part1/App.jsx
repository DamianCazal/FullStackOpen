const Hello = (props) => {

  return (
    <div>
      <p>Hello {props.name}, yoy are {props.age} years old</p>
    </div>
  )
}

function App() {
  const name = 'Peter'
  const age = 10

  return (
      <div>
        <h1>Greeting</h1>
        <Hello name='Maya' age={26+10}/>
        <Hello name={name} age={age}/>
        <Hello/>
      </div>
  )
}

export default App
