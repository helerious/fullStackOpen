const Header = (props) =>{
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) =>{
  console.log("content props is", props)
  return (
    <div>
      <Part part = {props.part1} and exercise = {props.exercise1} />
      <Part part = {props.part2} and exercise = {props.exercise2} />
      <Part part = {props.part3} and exercise = {props.exercise3} />
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
  console.log("part props is", props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {parts[0].name} and exercise1 = {parts[0].exercises} />
      <Content part2 = {parts[1].name} and exercise2 = {parts[1].exercises} />
      <Content part3 = {parts[2].name} and exercise3 = {parts[2].exercises} />
      <Total count1 = {parts[0].exercises} count2 = {parts[1].exercises} count3 = {parts[2].exercises}/>
    </div>
  )
}

export default App