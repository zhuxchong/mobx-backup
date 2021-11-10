/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-23 11:11:17
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 11:17:41
 * @FilePath: /mobx/mobx2020/src/store.js
 */
export const store1 = () => {
  return {
    bugs: ["Centipede"],
    addBug(bug) {
      this.bugs.push(bug);
    },
    bugsCount() {
      return this.bugs.length;
    },
  };
};
