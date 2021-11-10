/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-07-23 10:37:24
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-07-23 10:41:41
 * @FilePath: /mobx/mobx-react/config-overrides.js
 */
const { override, addDecoratorsLegacy, useBabelRc } = require("customize-cra");
module.exports = override(addDecoratorsLegacy(), useBabelRc());
