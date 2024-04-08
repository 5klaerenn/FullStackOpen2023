import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({ courses }) => {
	return (
		<>
			{courses.map((course) => (
				<div key={course.id}>
					<Header header={course.name} />
					<Content parts={course.parts} />
				</div>
			))}
		</>
	);
};
