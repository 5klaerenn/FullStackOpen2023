const Hello = (props) => {
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old.
			</p>
		</div>
	);
};

const App = () => {
	const friends = [
		{ name: "Peter", age: 10 },
		{ name: "Maya", age: 12 },
		{ name: "Gabriel", age: 11 },
	];

	return (
		<div>
			<h1>Greetings</h1>
			<Hello name={friends[0].name} age={friends[0].age} />
			<Hello name={friends[1].name} age={friends[1].age} />
			<Hello name={friends[2].name} age={friends[2].age} />
		</div>
	);
};

export default App;
