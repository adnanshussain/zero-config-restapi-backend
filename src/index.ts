const a: String = "Adnan 101";

interface IApi {
    name: String;
    fullName();
}

// Some fucking comment
class A implements IApi {
    fullName() {
        throw new Error("Method not implemented.");
    }
    name: String;

}

var user: IApi = new A();
var random = 23441;
user.name = "Gaandu";
console.log(user.name);
