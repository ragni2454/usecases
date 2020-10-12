var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sqrt = /** @class */ (function () {
    //y:number;
    function sqrt(x, y) {
        if (y === void 0) { y = 4; }
        this.y = y;
        this.x = x;
    }
    sqrt.prototype.squarert = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
        //console.log("hello");
    };
    return sqrt;
}());
var sqr = new sqrt(10, 7);
var a = sqr.squarert();
console.log(a);
//inheritance
var supersqr = /** @class */ (function (_super) {
    __extends(supersqr, _super);
    function supersqr(x, y, z) {
        if (z === void 0) { z = 4; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    supersqr.prototype.sq = function () {
        var d = _super.prototype.squarert.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return supersqr;
}(sqrt));
var pn = new supersqr(10, 3);
var b = pn.sq();
console.log(b);
