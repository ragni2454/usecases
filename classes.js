var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.walk = function (distance) {
        console.log(" my dog  " + this.name + " can walk " + distance + "km");
    };
    return Dog;
}());
var d = new Dog("Bittu");
d.walk(3);
