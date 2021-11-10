/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-23 10:55:38
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 11:10:36
 * @FilePath: /mobx/mobx2020/src/App.js
 */
import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { StoreProvider, StoreContext } from "./Provider";

// const store = () => ({
//   bugs: ["Centipede"],
//   addBug: (bug) => {
//     store.bugs.push(bug);
//   },
//   get bugsCount() {
//     return store.bugs.length;
//   },
// });

// const StoreProvider = ({ children }) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"],
//     addBug: (bug) => {
//       store.bugs.push(bug);
//     },
//     get bugsCount() {
//       return store.bugs.length;
//     },
//   }));

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   );
// };

const BugsHeader = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
};

const BugsList = () => {
  const store = React.useContext(StoreContext);
  console.log("re-render");
  return useObserver(() => (
    <ul>
      {store.bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        store.addBug(bug);
        setBug("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={bug}
        onChange={(e) => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}
