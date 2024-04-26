export const Person = ({ person, action }) => {

  return (
		<p>
			{person.name} {person.number} <button onClick={() => action(person.id)}>Delete</button>
		</p>
	);
};
