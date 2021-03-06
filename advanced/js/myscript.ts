class Vehicles {
	performance_model = "";
	number_of_seats = "";
	fuel_type = "";
	year_of_production = "";
	image= "";

	constructor(performance_model, number_of_seats, fuel_type, year_of_production,image) {
		this.performance_model = performance_model;
		this.number_of_seats = number_of_seats;
		this.fuel_type = fuel_type;
		this.year_of_production = year_of_production;
		this.image =image;
	}

	vehicleInfo() {
		return `<h1>The vehicles performance model is: ${this.performance_model}</h1>
		<P>The vehicle has ${this.number_of_seats} seats.</P>
		<P>The vehicle has the fuel type: ${this.fuel_type}<P>
		<P>The vehicle was produced in the year: ${this.year_of_production}</P>
		<img src="${this.image}" >`;
	}


	calcPrice() {
		return (Number(this.number_of_seats) * 10) + (Number(this.year_of_production) * 50) + (Number(this.seat_height) * 25) + (Number(this.ccm) * 15) + (Number(this.cargo_area) * 5) + (Number(this.mass) * 100);
	}

}


class Motor extends Vehicles {
	seat_height;
	ccm;

	constructor(performance_model, numbers_of_seats, fuel_type, year_of_production, seat_height, ccm,image) {
		super(performance_model, numbers_of_seats, fuel_type, year_of_production, image);
		this.seat_height = seat_height;
		this.ccm = ccm;
	}

	vehicleInfo() {
		return `${super.vehicleInfo()} 	This vehicle has a height of: ${this.seat_height} inches.
										This vehicle has ${this.ccm} ccm.	`;
	}
}

	


class Truck extends Vehicles {
	cargo_area;
	mass;

	constructor(performance_model, numbers_of_seats, fuel_type, year_of_production, cargo_area ,mass,image) {
		super(performance_model, numbers_of_seats, fuel_type, year_of_production, image)
		this.cargo_area = cargo_area;
		this.mass = mass;

	}

vehicleInfo() {
		return `${super.vehicleInfo()} 	This vehicle has a cargo area of: ${this.cargo_area} square meters.
										This vehicle has a mass of: ${this.mass}`;
	}
}

var vehicleDetails = new Vehicles("Tesla Model 3", 4, "Electric", 2018, "image/AudiQ8.jpg");
console.log(vehicleDetails.vehicleInfo());

var motorbikes = new Motor("Kawasaki z900", 1, "Coal", 2011, 2, 800, "image/Motorbike.jpeg");
console.log(motorbikes.vehicleInfo());

var truck = new Truck("MAN Lions Coach", 6, "Gas", 2015, 10, 1000, "image/Truck.jpeg")
console.log(truck.vehicleInfo());

document.write(vehicleDetails.vehicleInfo());
document.write(motorbikes.vehicleInfo());
document.write(truck.vehicleInfo());





    

 









//Function calculation


