class Vehicles {
	performance_model = "";
	number_of_seats = "";
	fuel_type = "";
	year_of_production = "";

	constructor(performance_model, number_of_seats, fuel_type, year_of_production) {
		this.performance_model = performance_model;
		this.number_of_seats = number_of_seats;
		this.fuel_type = fuel_type;
		this.year_of_production = year_of_production;
	}

	vehicleInfo() {
		return `The vehicles performance model is: ${this.performance_model}
		The vehicle has ${this.number_of_seats} seats.
		The vehicle has the fuel type: ${this.fuel_type}
		The vehicle was produced in the year: ${this.year_of_production}`;
	}
}

var vehicleDetails = new Vehicles("Tesla Model 3", 4, "Electric", 2018)
console.log(vehicleDetails.vehicleInfo());

class Motor extends Vehicles {
	motortype;

	constructor(performance_model, numbers_of_seats, fuel_type, year_of_production, motortype) {
		super(performance_model, numbers_of_seats, fuel_type, year_of_production);
		this.motortype = motortype;
	}

	vehicleInfo() {
		return `${super.vehicleInfo()} This vehicle has the motortype of ${this.motortype}`;
	}
}

// class Truck extends Vehicles {

// }