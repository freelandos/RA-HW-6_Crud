import {FC} from "react";
import { INote } from "../models";

interface NoteProps {
	note: INote;
	onDelete: (id: number) => Promise<void>;
}

export const Note: FC<NoteProps> = (props) => {
  const { note, onDelete } = props;

	return (
		<div className="note">
			<p className="note-content">{note.content}</p>
			<input
				type="image"
				src="src/img/delete.png"
				className="note-button"
				onClick={() => onDelete(note.id)}
			/>
		</div>
	);
};
