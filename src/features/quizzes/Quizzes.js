import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectQuizzes } from "./quizzesSlice";
import { useSelector } from "react-redux";

export default function Quizzes() {
	const quizzes = useSelector(selectQuizzes);
	return (
		<section className="center">
			<h1>Quizzes</h1>
			<ul className="quizzes-list">
				{Object.values(quizzes).map(({id, name}) => (
					<Link key={id} to={ROUTES.quizRoute(id)}>
						<li className="quiz">{name}</li>
					</Link>
				))}
			</ul>
			<Link to={ROUTES.newQuizRoute()} className="button">
				Create New Quiz
			</Link>
		</section>
	);
}
