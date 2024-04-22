import { FC, FormEvent, ChangeEvent, useState } from "react";

interface NoteFormProps {
	onAdd: (text: string) => Promise<void>;
}

export const NoteForm: FC<NoteFormProps> = (props) => {
  const { onAdd } = props;
	const [text, setText] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await onAdd(text);
		setText("");
	};

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

	return (
		<form onSubmit={handleSubmit} className="form">
			<label htmlFor="text" className="form-label">
				<textarea
					id="text"
					value={text}
					onChange={handleChange}
					className="form-textarea"
					required
				/>
				<input type="image" src="src/img/send.png" className="form-button"></input>
			</label>
		</form>
	);
};
