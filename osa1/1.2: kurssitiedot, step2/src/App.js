// luodan ensin komponentit Header, Content ja Total. Ne ottavat dataa App-komponentin olioista.

// Part komponentti luo jokainen kurssi erikseen props:ien avulla.

const Part = ({ partid, exercise }) => {
  return (
    <p>'{partid}' is made up of {exercise} exercises.</p>
  );
};

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
    <Part 
      partid={part1}
      exercise={exercise1}
    />
    <Part 
      partid={part2}
      exercise={exercise2}
    />
    <Part 
      partid={part3}
      exercise={exercise3}
    />

    

    {/*<p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
  </p>*/}
  </div>
  )
}

const Total = ({ exercise1, exercise2, exercise3 }) => {
  return (
  <div>
    <p>Total number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}

const App = () => {
const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

/*
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */

  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0].name} 
        part2={course.parts[1].name}
        part3={course.parts[2].name}
        exercise1={course.parts[0].exercises}
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises} 
      />
      <Total
        exercise1={course.parts[0].exercises} 
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises} 
      />
    </div>
  );
};

export default App;