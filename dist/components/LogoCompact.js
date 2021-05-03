"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logo;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo(_ref) {
  let {
    negative
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 64",
    width: "512",
    height: "64"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M31.1 15.4h11.4v33h-8.8V26.9l-7.9 16.8h-7.7l-7.9-16v20.8H1.3v-33h11.4l9.4 19.3 9-19.4zm58.3 0l11.9 33h-9.2l-2.8-8H75.8l-2.8 8h-9l11.9-33h13.5zm-2.4 18l-4.5-13L78 33.3l9 .1zM141.5 15c-4.6 0-8.4.7-11.5 2.1-3.1 1.4-5.5 3.3-7 5.9s-2.4 5.6-2.4 9.1c0 2.8.4 5.3 1.3 7.4.9 2.1 2.2 3.9 4 5.3 1.8 1.4 3.9 2.5 6.5 3.2 2.6.7 5.5 1.1 8.9 1.1 1.4 0 3-.1 4.3-.3 1.4-.2 2.8-.4 4-.7v-7.5c-1.1.3-2.4.5-3.7.7s-2.6.3-4 .3c-2.6 0-4.8-.4-6.5-1.1-1.7-.7-3-1.8-3.8-3.1s-1.3-3.1-1.3-5.3c0-2.1.4-3.8 1.3-5.2.8-1.4 2.1-2.5 3.8-3.2 1.8-.7 4-1.1 6.8-1.1 1.3 0 2.6.1 3.8.2 1.2.1 2.4.3 3.5.6v-7.5c-1.3-.3-2.6-.5-3.9-.6-1.2-.2-2.6-.3-4.1-.3zm49.5 0c-4.6 0-8.4.7-11.5 2.1-3.1 1.4-5.5 3.3-7 5.9-1.6 2.6-2.4 5.6-2.4 9.1 0 2.8.4 5.3 1.3 7.4.9 2.1 2.2 3.9 4 5.3 1.8 1.4 3.9 2.5 6.5 3.2 2.6.7 5.5 1.1 8.9 1.1 1.4 0 3-.1 4.3-.3 1.4-.2 2.8-.4 4-.7v-7.5c-1.1.3-2.4.5-3.7.7-1.3.2-2.6.3-4 .3-2.6 0-4.8-.4-6.5-1.1-1.7-.7-3-1.8-3.8-3.1-.8-1.3-1.3-3.1-1.3-5.3 0-2.1.4-3.8 1.3-5.2.8-1.4 2.1-2.5 3.8-3.2 1.8-.7 4-1.1 6.8-1.1 1.3 0 2.6.1 3.8.2 1.2.1 2.4.3 3.5.6v-7.5c-1.3-.3-2.6-.5-3.9-.6-1.2-.2-2.6-.3-4.1-.3zm53.3.4l11.9 33H247l-2.8-8h-13.6l-2.8 8h-9.1l11.9-33h13.7zm-2.4 18l-4.5-12.9-4.4 12.9h8.9zm57.4 2.1l9.7 13h-10.4L290.1 37c-.5 0-1 0-1.5-.1-.6-.1-1.2-.1-1.8-.1v11.6h-9.2V16.5c1.1-.3 2.4-.5 3.8-.8 1.4-.2 2.8-.4 4.3-.5 1.4-.1 2.8-.2 4.1-.2 5.2 0 9.2.9 11.9 2.6 2.7 1.8 4.1 4.5 4.1 8.3 0 2.5-.6 4.5-1.9 6.1-1.1 1.5-2.6 2.6-4.6 3.5zm-12.5-5.2c.4.1.9.1 1.3.1.4.1.9.1 1.3.1s.9.1 1.3.1c2.1 0 3.7-.4 4.8-1.1s1.6-1.9 1.6-3.5c0-1.1-.3-1.9-.7-2.6-.4-.7-1.2-1.1-2.1-1.4-.9-.3-2.1-.4-3.6-.4-.6 0-1.3.1-1.9.1-.7.1-1.3.1-1.9.3l-.1 8.3zm52.6 4.7h15.8v-7h-15.8v-5.7h18.1v-7h-27.3v33h27.6v-7h-18.3l-.1-6.3zm50.7-19.6h-9.4v33H407v-7.3h-17V15.4zm47.6 0h-9.4v33h26.3v-7.3h-17V15.4zm73 16.6c0 3.5-.8 6.5-2.3 9.1-1.5 2.5-3.6 4.5-6.5 5.8-2.8 1.4-6.1 2.1-9.9 2.1s-7.1-.7-9.9-2c-2.8-1.3-5-3.3-6.5-5.8s-2.3-5.6-2.3-9.1.8-6.6 2.3-9.1 3.6-4.5 6.4-5.8 6.1-2 9.9-2c3.8 0 7.2.7 9.9 2.1 2.8 1.4 4.9 3.3 6.4 5.8 1.7 2.3 2.5 5.3 2.5 8.9zm-9.6.1c0-2.2-.4-4-1.1-5.5-.8-1.4-1.8-2.6-3.1-3.3-1.3-.8-3-1.1-4.8-1.1-1.9 0-3.5.4-4.8 1.1-1.4.7-2.4 1.8-3.1 3.1-.7 1.3-1.1 3.2-1.1 5.3 0 2.2.4 4.1 1.1 5.5.7 1.4 1.8 2.5 3.1 3.3 1.3.7 3 1.1 4.9 1.1 1.9 0 3.6-.4 4.9-1.1s2.4-1.8 3.1-3.2c.6-1.4.9-3.2.9-5.2z",
    fill: negative ? '#ffffff' : '#1e1e2d'
  }));
}