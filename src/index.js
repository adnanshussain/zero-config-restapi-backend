var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    UserAccount.prototype.toString = function () {
        return ("Chal kat MKL !");
    };
    UserAccount.prototype.greet = function (message) {
        console.log("Hello " + message + ", today is " + (new Date()).toDateString() + "!");
    };
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
console.log(user.toString());
user.greet("Oye Dallay !");

function reverse(text) {

}
