/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-23 11:08:50
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 11:11:58
 * @FilePath: /mobx/mobx2020/src/Provider.js
 */
import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { store1 } from "./store";
const StoreContext = React.createContext();
const StoreProvider = ({ children }) => {
  const store = useLocalStore(store1);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export { StoreProvider, StoreContext };
