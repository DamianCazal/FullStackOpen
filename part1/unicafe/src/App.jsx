import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)
  const [promAverage, setPromAverage] = useState(0)
  const [promPositive, setPromPositive] = useState(0)


  const Header = (props) => {
    return (
      <>
        <h1>{props.title}</h1>
      </>
    )
  }

  const Button = (props) => {
    return (
      <>
        <button onClick={props.onClick}>{props.text}</button>
      </>
    )
  }

  const Total = (props) => {
    return (
      <>
        <p>{props.name}: {props.value} {props.prom ? '%' : null}</p>
      </>
    )
  }

  const Statistics = () => {

    function calculatedProm(selected, total) {
      return (selected / total)
    }

    function calculatedPositive(selected, total) {
      return (selected / total) * 100
    }


    return bad + neutral + good !== 0 ? (
      <>
        <Total name={'Good'} value={good} />
        <Total name={'Neutral'} value={neutral} />
        <Total name={'Bad'} value={bad} />
        <Total name={'All Feedback'} value={bad + neutral + good} />
        <Total name={'Average'} value={calculatedProm((good * 1 + neutral * 0 + bad * -1), bad + neutral + good)} />
        <Total name={'Positive'} value={calculatedPositive(good, bad + neutral + good)} prom={true} />

      </>
    ) :
    (
      <>
      <p>No Feedback Given</p>
      </>
    )
  }

  return (
    <>
      <Header title={'Give Feedback'} />
      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      <Header title={'Statistics'} />
      <Statistics />

    </>
  )
}

export default App
