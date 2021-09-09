var Rocket = /** @class */ (function () {
    function Rocket(id, code) {
        this.powers = new Array();
        this.id = id;
        this.code = code;
        this.powers = [];
    }
    Rocket.prototype.addPower = function (power) {
        this.powers.push(power);
    };
    return Rocket;
}());
