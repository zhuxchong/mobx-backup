/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-22 23:54:08
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 10:34:12
 * @FilePath: /mobx/mobx-react/src/notesStore.js
 */
import { nanoid } from "nanoid";
class Store {
  @observable
  notes: [];
  @action
  addNote(text) {
    this.notes.push({
      text,
      id: nanoid(),
    });
  }
  @action
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  @action
  getList() {
    return this.notes;
  }
}
const createNotesStore = new Store();
// export function createNotesStore() {
//   return {
//     notes: [],
//     notes1: [],
//     addNote1(text) {
//       this.notes1.push({
//         text,
//         id: nanoid(),
//       });
//     },
//     removeNote1(id) {
//       this.notes1 = this.notes1.filter((note) => note.id !== id);
//     },
//     addNote(text) {
//       this.notes.push({
//         text,
//         id: nanoid(),
//       });
//     },
//     removeNote(id) {
//       this.notes = this.notes.filter((note) => note.id !== id);
//     },
//     getList() {
//       return this.notes;
//     },
//   };
// }
