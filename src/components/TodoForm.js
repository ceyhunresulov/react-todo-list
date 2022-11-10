import React from "react";

export default function TodoForm({ addNewNote, addNewValue, value, note }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNote([
      ...note,
      {
        id: note.length + 1,
        note: value,
        done: false,
      },
    ]);
    addNewValue("");
  };
  return (
    <>
      <form action="submit" className="add-note-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="add-note"
          value={value}
          onChange={(e) => addNewValue(e.target.value)}
          placeholder="Add Note"
        />
        <button type="submit" className="note-btn">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
}
