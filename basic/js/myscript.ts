//Create the class person
class Person {

	name = "";
	age = "";
	jobTitle ="";

	constructor(name, age, jobTitle) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	fullName() {
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}

	let sentence = new Person("John", "22", "Programmer");
	console.log(sentence);



}