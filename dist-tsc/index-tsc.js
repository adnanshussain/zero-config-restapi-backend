var a = "Adnan 101";
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.fullName = function () {
        throw new Error("Method not implemented.");
    };
    return A;
}());
var user = new A();
user.name = "Gaandu";
console.log(user.name);
