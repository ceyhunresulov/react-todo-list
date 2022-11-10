import React from "react";
import Todo from "./Todo";

export default function Todos({ note, addNewNote }) {
  return (
    <>
      <ul className="note-list">
        {note.map((item) => (
          <Todo
            key={item.id}
            item={item}
            addNewNote={addNewNote}
            note={note}
          ></Todo>
        ))}
      </ul>
    </>
  );
}
