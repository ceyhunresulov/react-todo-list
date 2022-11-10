import { useEffect, useState } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [value, setValue] = useState("");
  const [note, setNote] = useState(JSON.parse(localStorage.getItem("notes")));
  const addNewValue = (newValue) => {
    setValue(newValue);
  };
  const addNewNote = (newNote) => {
    setNote(newNote);
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);
  return (
    <>
      <Header></Header>
      <TodoForm
        addNewNote={addNewNote}
        addNewValue={addNewValue}
        value={value}
        note={note}
      ></TodoForm>
      <Todos note={note} addNewNote={addNewNote}></Todos>
    </>
  );
}

export default App;
