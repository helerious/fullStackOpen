const Header = (props) =>{
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) =>{
  console.log("content props is", props)
  console.log("content props [0] name is", props.content.parts[0].name)
  return (
    <div>
      <Part part = {props.content.parts[0].name} and exercise = {props.content.parts[0].exercises} />
      <Part part = {props.content.parts[1].name} and exercise = {props.content.parts[1].exercises} />
      <Part part = {props.content.parts[2].name} and exercise = {props.content.parts[2].exercises} />
    </div>
  )
}
const Total = (props) =>{
  console.log("total is ", props.total.parts[0].exercises)
  return (
    <div>
      <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
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

  return (
    <div>
      <Header course = {course.name} />
      <Content content = {course} />
      <Total total = {course}/>
    </div>
  )
}

export default App