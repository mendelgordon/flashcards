import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ALL_ICONS } from "../data/icons";
/* import addTopic and dispatch it from the event handler that runs when the new topic form is submitted */
import { addTopic } from "../features/topics/topicsSlice";
import { useDispatch } from "react-redux";

export default function NewTopicForm() {
	const [name, setName] = useState("");
	const [icon, setIcon] = useState("");
	const navigate = useNavigate();
	/* import dispatch from react-redux */
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length === 0) {
			return;
		}

		/* dispatch the addTopic action creator, passing in an object with the id, name, and icon properties. */
		dispatch(
			addTopic({
				id: uuidv4(),
				name,
				icon,
			})
		);
		navigate("/topics");
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h1 className="center">Create a new topic</h1>
				<div className="form-section">
					<input id="topic-name" type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="Topic Name" />
					<select onChange={(e) => setIcon(e.currentTarget.value)} required defaultValue="default">
						<option value="default" disabled hidden>
							Choose an icon
						</option>
						{ALL_ICONS.map(({ name, url }) => (
							<option key={url} value={url}>
								{name}
							</option>
						))}
					</select>
				</div>
				<button className="center">Add Topic</button>
			</form>
		</section>
	);
}
