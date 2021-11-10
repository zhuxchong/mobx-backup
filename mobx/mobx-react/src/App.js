import React from "react";
import "./App.css";
import { NewNoteForm } from "./NewNoteForm";
// import { useNotesStore } from "./NotesContext";
import { useObserver } from "mobx-react";
import { createNotesStore } from "./notesStore";
import { useLocalStore } from "mobx-react";
import { Provider } from "mobx-react";

function App() {
  // const notesStore = useNotesStore();
  const notesStore = useLocalStore(() => createNotesStore);
  console.log("re-render");
  return (
    <React.Fragment>
      {useObserver(() => (
        <>
          <ul>
            {notesStore.notes.map((note) => (
              <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
                {note.text}
              </li>
            ))}
          </ul>
        </>
      ))}{" "}
      <NewNoteForm />
    </React.Fragment>
  );
}

const _App = () => {
  return (
    <Provider store={createNotesStore}>
      <App />
    </Provider>
  );
};

export default _App;
