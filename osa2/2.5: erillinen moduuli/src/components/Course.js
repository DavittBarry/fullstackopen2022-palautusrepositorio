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
        <Total course={course[0].parts} />
        <Header course={course[1]} />
        <Content course={course[1].parts} />
        <Total course={course[1].parts} />
    </div>
    );
};

export default Course;