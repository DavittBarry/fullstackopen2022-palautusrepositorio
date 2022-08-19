import List from './List';

const Show = ({ personsToShow }) => {
    return (
        <ul>
            {personsToShow.map(person =><List key={person.name} person={person} />)}
        </ul>
    );
};

export default Show;