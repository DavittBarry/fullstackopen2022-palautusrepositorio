const Header = ({ course }) => <h1>{course.name}</h1>;

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
      <Header course={course} />
      <Content course={course.parts} />
      <br/>
      <Total course={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ],
  };
  return <Course course={course} />;
};

export default App;
