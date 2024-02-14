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
      <p>{props.part1} {props.exercise1}</p>
      <p>{props.part2} {props.exercise2}</p>
      <p>{props.part3} {props.exercise3}</p>
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
/*const Part = (props) =>{
  //console.log("part props is", props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}*/
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1.name} and exercise1 = {part1.exercises} />
      <Content part2 = {part2.name} and exercise2 = {part2.exercises} />
      <Content part3 = {part3.name} and exercise3 = {part3.exercises} />
      <Total count1 = {part1.exercises} count2 = {part2.exercises} count3 = {part3.exercises}/>
    </div>
  )
}

export default App