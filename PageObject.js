class Page {
    constructor(name) {
        this.name = name;
        this.talk = function () {
            alert("Meow, I am " + this.name);
        };
    }
}
class DIY extends Page {
    constructor(name, host) {
        super(name);
        this.host = host;
    }
    talk() {
        alert("Meow, I am " + this.name + "! My host is " + this.host + "!");
    }
}
cat7 = new DIY("Mr. Bigglesworth"
    , "Dr. Evil");
cat7.talk();