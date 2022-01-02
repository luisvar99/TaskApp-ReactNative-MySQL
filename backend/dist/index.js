"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();

_app["default"].listen(process.env.PORT, function () {
  console.log('server on port 3000');
});