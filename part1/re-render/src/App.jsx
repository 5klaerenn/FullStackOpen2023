import { useState } from "react";

const App = () => {
	const [counter, setCounter] = useState(0);

	const increaseByOne = () => setCounter(counter + 1);
	const decreaseByOne = () => setCounter(counter - 1);
	const setToZero = () => setCounter(0);

  //const handleClick = () => console.log('clicked');

	return (
		<div className="flex flex-row items-center justify-around w-25">
			<Display counter={counter} />
			<Button onClick={increaseByOne} text="plus" />
			<Button onClick={setToZero} text="zero"/>
			<Button onClick={decreaseByOne} text="minus" />
		</div>
	);
};

export default App;

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
