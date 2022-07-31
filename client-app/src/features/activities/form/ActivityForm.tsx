import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity | undefined;
	submitting: boolean
	closeForm: () => void;
	createOrEdit: (activity: Activity) => void;
}
const ActivityForm = ({
	activity: selectedActivity,
	closeForm,
	createOrEdit,
	submitting
}: Props) => {
	const initialState = selectedActivity ?? {
		id: "",
		title: "",
		date: "",
		description: "",
		category: "",
		city: "",
		venue: "",
	};

	const [activity, setActivity] = useState(initialState);

	const handleSubmit = () => {
		createOrEdit(activity)
	};

	function handleInputChage(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = event.target;
		setActivity({ ...activity, [name]: value });
	}

	return (
		<Segment clearing>
			<Form onSubmit={handleSubmit} autoComplete="off">
				<Form.Input
					placeholder="Title"
					value={activity.title}
					name="title"
					onChange={handleInputChage}
				/>
				<Form.TextArea
					placeholder="Description"
					value={activity.description}
					name="description"
					onChange={handleInputChage}
				/>
				<Form.Input
					placeholder="Category"
					value={activity.category}
					name="category"
					onChange={handleInputChage}
				/>
				<Form.Input
					type="date"
					placeholder="Date"
					value={activity.date}
					name="date"
					onChange={handleInputChage}
				/>
				<Form.Input
					placeholder="City"
					value={activity.city}
					name="city"
					onChange={handleInputChage}
				/>
				<Form.Input
					placeholder="Venue"
					value={activity.venue}
					name="venue"
					onChange={handleInputChage}
				/>
				<Button
				loading={submitting}
					floated="right"
					positive
					type="submit"
					content="Submit"
				/>
				<Button
					onClick={closeForm}
					floated="right"
					type="button"
					content="Cancel"
				/>
			</Form>
		</Segment>
	);
};

export default ActivityForm