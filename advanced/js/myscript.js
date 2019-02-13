var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(performance_model, number_of_seats, fuel_type, year_of_production) {
        this.performance_model = "";
        this.number_of_seats = "";
        this.fuel_type = "";
        this.year_of_production = "";
        this.performance_model = performance_model;
        this.number_of_seats = number_of_seats;
        this.fuel_type = fuel_type;
        this.year_of_production = year_of_production;
    }
    Vehicles.prototype.vehicleInfo = function () {
        return "The vehicles performance model is: " + this.performance_model + "\n\t\tThe vehicle has " + this.number_of_seats + " seats.\n\t\tThe vehicle has the fuel type: " + this.fuel_type + "\n\t\tThe vehicle was produced in the year: " + this.year_of_production;
    };
    return Vehicles;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(performance_model, numbers_of_seats, fuel_type, year_of_production, seat_height, ccm) {
        var _this = _super.call(this, performance_model, numbers_of_seats, fuel_type, year_of_production) || this;
        _this.seat_height = seat_height;
        _this.ccm = ccm;
        return _this;
    }
    Motor.prototype.vehicleInfo = function () {
        return _super.prototype.vehicleInfo.call(this) + " \tThis vehicle has a seigt height of: " + this.seat_height + " inches.\n\t\t\t\t\t\t\t\t\t\tThis vehicle has " + this.ccm + " ccm.\t";
    };
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(performance_model, numbers_of_seats, fuel_type, year_of_production, cargo_area, mass) {
        var _this = _super.call(this, performance_model, numbers_of_seats, fuel_type, year_of_production) || this;
        _this.cargo_area = cargo_area;
        _this.mass = mass;
        return _this;
    }
    Truck.prototype.vehicleInfo = function () {
        return _super.prototype.vehicleInfo.call(this) + " \tThis vehicle has a caro area of: " + this.cargo_area + " square meters.\n\t\t\t\t\t\t\t\t\t\tThis vehicle has a mass of: " + this.mass;
    };
    return Truck;
}(Vehicles));
var vehicleDetails = new Vehicles("Tesla Model 3", 4, "Electric", 2018);
console.log(vehicleDetails.vehicleInfo());
var motorbikes = new Motor("Kawasaki z900", 1, "Coal", 2011, 2, 800);
console.log(motorbikes.vehicleInfo());
var truck = new Truck("MAN Lions Coach", 6, "Gas", 2015, 10, 1000);
console.log(truck.vehicleInfo());
