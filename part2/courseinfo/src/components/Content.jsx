import { v4 as uuidv4 } from "uuid";
import { Part } from "./Part";


export const Content = ({ parts }) => {
	const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);

	return (
		<div>
			{parts.map((part) => (
				<Part key={uuidv4()} name={part.name} exercises={part.exercises} />
			))}
			<p>
				<b>Total of {sum} exercises</b>
			</p>
		</div>
	);
};
