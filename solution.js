//1
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printDetails: function () {
        return this.firstName + this.lastName + ' is a student in class ' + this.class;
    }
};

console.log( student.printDetails());

//2
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "France",
    printDetails: function () {
        return this.firstName + this.lastName + 'is a ' + this.age + ' year old ' + this.job + ' living in ' + this.city;
    },
    getLength: function () {
        return Object.keys(this).length;
    }
};

console.log(person.printDetails());
console.log(person.getLength());
