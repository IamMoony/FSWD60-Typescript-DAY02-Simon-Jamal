//Create the class person
class Person {

	name = "";
	age = "";
	jobTitle ="";

	constructor(name, age, jobTitle ="") {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	whoYouAre() {
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}
}

	let sentence = new Person("John", 22,"Programmer");
	console.log(sentence.whoYouAre());



class job extends Person{
	 salary;
	 jobLocation;
  
  constructor(name,age,jobTitle,salary,jobLocation){
      super(name, age, jobTitle)
      this.salary=salary;
      this.jobLocation=jobLocation


  }
  whoYouAre(){
  	return ` ${super.whoYouAre()} and I get ${this.salary} every Month and I work in ${this.jobLocation}`
  }
}
var jobsituation= new job("John", 22,"Programmer", 2000,"Vienna")
console.log(jobsituation.whoYouAre());

	

