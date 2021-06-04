"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = "Adnan 101";

// Some fucking comment
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);

    _defineProperty(this, "name", void 0);
  }

  _createClass(A, [{
    key: "fullName",
    value: function fullName() {
      throw new Error("Method not implemented.");
    }
  }]);

  return A;
}();

var user = new A();
user.name = "Gaandu";
console.log(user.name);
