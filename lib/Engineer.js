const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github; 
    };

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
    makeHTML(){
        return `
        <div class="card" style="width: 18rem;">
        <img src="https://media.istockphoto.com/photos/serious-handsome-engineer-using-a-laptop-while-working-in-the-oil-and-picture-id1310818458?b=1&k=20&m=1310818458&s=170667a&w=0&h=hJ6NJzqbXklIvMsd24AjYjz2u6qmwoKtJrDKAVoHCCc=" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5> Engineer </h5>
          <p class="card-text">My id is ${this.id}</p>
          <p class="card-text">My email is ${this.email}</p>
          <p class="card-text">My github is ${this.github}</p>
        </div>
     </div>
        `
    }
}

module.exports = Engineer;
