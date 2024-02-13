const Header = (props) =>{
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) =>{
  //console.log("content props is", props)
  return (
    <div>
      <Part part = {props.part1} and exercise = {props.exercise1}/>
      <Part part = {props.part2} and exercise = {props.exercise2}/>
      <Part part = {props.part3} and exercise = {props.exercise3}/>
    </div>
  )
}
const Total = (props) =>{
  return (
    <div>
      <p>Number of exercises {props.count1 + props.count2 + props.count3}</p>
    </div>
  )
}
const Part = (props) =>{
  //console.log("part props is", props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
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
      <Content part1 = {part1} and exercise1 = {exercises1} />
      <Content part2 = {part2} and exercise2 = {exercises2} />
      <Content part3 = {part3} and exercise3 = {exercises3} />
      <Total count1 = {exercises1} count2 = {exercises2} count3 = {exercises3}/>
    </div>
  )
}

export default App