import React from "react";

export default function Todo({ item, addNewNote, note }) {
  const removeNote = (e) => {
    addNewNote(note.filter((e) => e.id !== item.id));
  };
  const doneNote = () => {
    if (item.done) {
      addNewNote([
        { ...item, done: !item.done },
        ...note.filter((i) => i.id !== item.id),
      ]);
    } else {
      addNewNote([
        ...note.filter((i) => i.id !== item.id),
        { ...item, done: !item.done },
      ]);
    }
  };
  return (
    <>
      <li className={(item.done && "note-list-done") || "note-list-item"}>
        {item.note}
        <i className="fas delete fa-trash-alt" onClick={removeNote}></i>
        <i className="fas done fa-check-square" onClick={doneNote}></i>
      </li>
    </>
  );
}
