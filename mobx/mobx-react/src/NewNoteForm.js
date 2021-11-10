/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-22 23:54:08
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 00:14:04
 * @FilePath: /mobx/mobx-react/src/NewNoteForm.js
 */
import React from "react";
import { useNotesStore } from "./NotesContext";

export const NewNoteForm = () => {
  const [noteText, setNoteText] = React.useState("");
  const notesStore = useNotesStore();

  return (
    <>
      <input
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        type="text"
      />
      <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
      {/* <button onClick={() => notesStore.addNote1(noteText)}>Add note</button> */}
    </>
  );
};
export const NewNoteForm1 = () => {
  const [noteText, setNoteText] = React.useState("");
  const notesStore = useNotesStore();

  return (
    <>
      <input
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        type="text"
      />
      {/* <button onClick={() => notesStore.addNote(noteText)}>Add note</button> */}
      <button onClick={() => notesStore.addNote1(noteText)}>Add note</button>
    </>
  );
};
