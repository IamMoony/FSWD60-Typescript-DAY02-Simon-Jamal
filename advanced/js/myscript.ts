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

	calcPrice() {
		return (Number(this.number_of_seats) * 10) + (Number(this.year_of_production) * 50) + (Number(this.seat_height) * 25) + (Number(this.ccm) * 15) + (Number(this.cargo_area) * 5) + (Number(this.mass) * 100);
	}
}


class Motor extends Vehicles {
	seat_height;
	ccm;

	constructor(performance_model, numbers_of_seats, fuel_type, year_of_production, seat_height, ccm) {
		super(performance_model, numbers_of_seats, fuel_type, year_of_production);
		this.seat_height = seat_height;
		this.ccm = ccm;
	}

	vehicleInfo() {
		return `${super.vehicleInfo()} 	This vehicle has a height of: ${this.seat_height} inches.
										This vehicle has ${this.ccm} ccm.	`;
	}
}

<<<<<<< HEAD

	
	
	

=======
class Truck extends Vehicles {
	cargo_area;
	mass;

	constructor(performance_model, numbers_of_seats, fuel_type, year_of_production, cargo_area ,mass) {
		super(performance_model, numbers_of_seats, fuel_type, year_of_production)
		this.cargo_area = cargo_area;
		this.mass = mass;
	}

vehicleInfo() {
		return `${super.vehicleInfo()} 	This vehicle has a caro area of: ${this.cargo_area} square meters.
										This vehicle has a mass of: ${this.mass}`;
	}
}

var vehicleDetails = new Vehicles("Tesla Model 3", 4, "Electric", 2018);
console.log(vehicleDetails.vehicleInfo());

var motorbikes = new Motor("Kawasaki z900", 1, "Coal", 2011, 2, 800);
console.log(motorbikes.vehicleInfo());

var truck = new Truck("MAN Lions Coach", 6, "Gas", 2015, 10, 1000)
console.log(truck.vehicleInfo());
<<<<<<< HEAD



//Function calculation

=======
>>>>>>> 74a8b4f69dc2681e25454a7af327d9550cee22c5
>>>>>>> 642e25baf931c94700bf275662327c5d5544a08c
