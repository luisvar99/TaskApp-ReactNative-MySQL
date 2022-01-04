"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();

_app["default"].listen(process.env.PORT, function () {
  console.log('server on port 3000');
});