// luodan ensin komponentit Header, Content ja Total. Ne ottavat dataa App-komponentin olioista.

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
  return(
  <div>
      <p>'{part1}' is composed of {exercise1} exeercises.</p>
      <p>'{part2}' is composed of {exercise2} exeercises.</p>
      <p>'{part3}' is composed of {exercise3} exeercises.</p>
  </div>
  )
}

const Total = ({ exercise1, exercise2, exercise3 }) => {
  return (
  <div>
    <p>Total number of exercises together: {exercise1 + exercise2 + exercise3}</p>
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
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
      <Total 
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </div>
  )
}

export default App;