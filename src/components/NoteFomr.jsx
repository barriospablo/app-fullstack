import { useRef, useState } from "react";
import Togglable from "./Togglable";

export default function NoteForm({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState("");
  const elementRef = useRef();
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    addNote(noteObject);
    setNewNote("");
    elementRef.current.toggleVisibility();
  };
  console.log(elementRef);

  return (
    <Togglable buttonLabel="New noteeee" ref={elementRef}>
      <div>
        <h3>Create a new note</h3>
        <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={handleChange} />
          <button type="submit">save</button>
        </form>
        <div>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </Togglable>
  );
}
