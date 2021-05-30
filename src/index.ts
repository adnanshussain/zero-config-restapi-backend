const a: String = "Adnan 101";

interface IApi {
    name: String;
    fullName();
}

class A implements IApi {
    fullName() {
        throw new Error("Method not implemented.");
    }
    name: String;

}

var user: IApi = new A();

user.name = "Gaandu";
console.log(user.name);
