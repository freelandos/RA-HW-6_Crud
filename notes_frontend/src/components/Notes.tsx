import { FC, useEffect, useState } from "react";
import { NoteForm } from "./NoteForm";
import { Note } from "./Note";
import { INote } from "../models";
import axios from "axios";

export const Notes: FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:7070/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleAddNote = async (text: string) => {
    try {
      await axios.post("http://localhost:7070/notes", {
        id: 0,
        content: text,
      });
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error delete note:", error);
    }
  };

  return (
    <div className="container">
      <div className="head">
        <h2 className="title">Notes</h2>
        <input type="image" src="src/img/update.png" className="button-update" onClick={fetchNotes}></input>
      </div>
      <div className="notes">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>
      <NoteForm onAdd={handleAddNote}/>
    </div>
  );
};
