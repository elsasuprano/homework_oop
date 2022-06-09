class Employee {
    constructor(name, id, email, role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role; 
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
}

module.exports = Employee;


// const elsa = new Employee("Elsa", "1", "Elsa@gmail.com")
// const erik = new Employee("Erik", "2", "erik@gmail.com")

// console.log(elsa.getName())
// console.log(erik.getName())

// Normal function (not a method)
// function getName() {
//     return "Elsa"
// }

// getName()