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
//Create the class person
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        if (jobTitle === void 0) { jobTitle = ""; }
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.whoYouAre = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var sentence = new Person("John", 22, "Programmer");
console.log(sentence.whoYouAre());
var job = /** @class */ (function (_super) {
    __extends(job, _super);
    function job(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    job.prototype.whoYouAre = function () {
        return " " + _super.prototype.whoYouAre.call(this) + " and I get " + this.salary + " every Month and I work in " + this.jobLocation;
    };
    return job;
}(Person));
var Personalsituation = new job("John", 22, "Programmer", 2000, "Vienna");
document.write(Personalsituation.whoYouAre());
