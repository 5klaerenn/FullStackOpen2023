import { Person } from "./Person";

export const Persons = ({ personsToShow, action }) => {
  return (
      <ul>
        {personsToShow.map((person) => (
            <Person key={person.id} person={person} action={action} />
        ))}
      </ul>
  );
};
