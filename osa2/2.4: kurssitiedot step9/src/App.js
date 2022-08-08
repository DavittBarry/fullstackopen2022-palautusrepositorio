const Header = ({ course }) => { 
  //console.log(course);
  return(
    <h1>{course.name}</h1>
  )};

const Part = (props) => {
  //console.log(props)
  // props tässä tapauksessa on <Part />:in props, .map jälkeen.
  return (
    <div>
    <h3>Course {props.part.id}: </h3>
    <p>'{props.part.name}'</p>
    <p>Exercises in course: {props.part.exercises}</p>
    </div>
  );
};

const Content = ({ course }) => {
  //console.log(course.parts);
  return (
    <div>
      {course.map((part) => (
        <Part key={part.id} part={part} /> // Lähettää Part-komponentille map-versio course:sta
      ))}
    </div>
  );
};

const Total = ({ course }) => {
    // Tässä käytetään .reduce() siten, että se laskea course:ien props jokaista taulukko-/oliosta
    console.log(course);
    const sumTotal = course.reduce((y, z) => {
      return y + z.exercises;
    }, 0);
    return (
      <div>
        <h4>Total number of exercises: {sumTotal}</h4>
      </div>
    );
  };

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0].parts} />
      <br/>
      <Total course={course[0].parts} />
      <br/>
      <Header course={course[1]} />
      <Content course={course[1].parts} />
      <Total course={course[1].parts} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <div><Course course={courses} /></div>;
};

export default App;