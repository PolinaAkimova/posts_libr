"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PostModule = _interopRequireDefault(require("./Post.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostCard = function PostCard(_ref) {
  var children = _ref.children,
      callback = _ref.callback;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _PostModule.default.post,
    onClick: callback
  }, children);
};

var _default = PostCard;
exports.default = _default;