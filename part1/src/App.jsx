const Header = (props) =>{
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) =>{
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Total = (props) =>{
  return (
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part = {part1} and exercise = {exercises1} />
      <Content part = {part2} and exercise = {exercises2} />
      <Content part = {part3} and exercise = {exercises3} />
      <Total count = {10+7+14} />
    </div>
  )
}

export default App