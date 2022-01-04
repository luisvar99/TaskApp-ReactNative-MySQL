"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.saveTask = exports.getTasks = exports.getTaskCount = exports.getTask = exports.deleteTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connect, _yield$connect$query, _yield$connect$query2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context.sent;
            _context.next = 5;
            return connect.query('SELECT * FROM tasks');

          case 5:
            _yield$connect$query = _context.sent;
            _yield$connect$query2 = (0, _slicedToArray2["default"])(_yield$connect$query, 1);
            rows = _yield$connect$query2[0];
            res.json(rows);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connect, _yield$connect$query3, _yield$connect$query4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context2.sent;
            _context2.next = 5;
            return connect.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);

          case 5:
            _yield$connect$query3 = _context2.sent;
            _yield$connect$query4 = (0, _slicedToArray2["default"])(_yield$connect$query3, 1);
            rows = _yield$connect$query4[0];
            res.json(rows[0]);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTask = getTask;

var getTaskCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connect, _yield$connect$query5, _yield$connect$query6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context3.sent;
            _context3.next = 5;
            return connect.query('SELECT COUNT(*) FROM tasks');

          case 5:
            _yield$connect$query5 = _context3.sent;
            _yield$connect$query6 = (0, _slicedToArray2["default"])(_yield$connect$query5, 1);
            rows = _yield$connect$query6[0];
            res.json(rows[0]["COUNT(*)"]);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getTaskCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTaskCount = getTaskCount;

var saveTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connect, _yield$connect$query7, _yield$connect$query8, results;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context4.sent;
            _context4.next = 5;
            return connect.query('INSERT INTO tasks(title, description) VALUES (?,?)', [req.body.title, req.body.description]);

          case 5:
            _yield$connect$query7 = _context4.sent;
            _yield$connect$query8 = (0, _slicedToArray2["default"])(_yield$connect$query7, 1);
            results = _yield$connect$query8[0];
            res.json(_objectSpread({
              id: results.insertId
            }, req.body));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function saveTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.saveTask = saveTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connect;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context5.sent;
            _context5.next = 5;
            return connect.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connect, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.connection)();

          case 2:
            connect = _context6.sent;
            _context6.next = 5;
            return connect.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id]);

          case 5:
            result = _context6.sent;

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;