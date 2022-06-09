const { prompt } = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const employees = []

const additionalQuestions = {
    'Engineer': {
        message: "What is this engineer's github?",
        name: "extra",
        type: "input"
    },
    'Manager': {
        message: "What is the manager's office number?",
        name: "extra",
        type: "input"
    },
    'Intern': {
        message: "What is the intern's school",
        name: "extra",
        type: "input"
    },
}

const start = () => {
    prompt({
        message: "What would you like to do?",
        type: "list",
        name: "choice",
        choices: ['CREATE AN EMPLOYEE', 'GENERATE HTML']
    }).then(res => {
        switch (res.choice) {
            case 'CREATE AN EMPLOYEE':
                return createEmployee();
            case 'GENERATE HTML':
                return generateHTML()
            default:
        }
    })
}

const createEmployee = () => {
    prompt([
        {
            message: "What type of employee?",
            type: "list",
            name: "type",
            choices: ['Engineer', 'Manager', 'Intern']
        },
        {
            message: "what is the name of the employee?",
            type: "input",
            name: "name",
        },
        {
            message: "What is the ID of the employee?",
            type: "input",
            name: "id",
        },
        {
            message: "what is the email of the employee?",
            type: "input",
            name: "email",
        },
    ]).then(emp => {
        const extraQ = additionalQuestions[emp.type];
        console.log("extra question", extraQ);

        prompt(extraQ).then(({ extra }) => {
            console.log("extra value ---", extra);
            let newEmp;
            switch (emp.type) {
                case 'Engineer':
                    newEmp = new Engineer(emp.name, emp.id, emp.email, extra);
                    break;
                case 'Manager':
                    newEmp = new Manager(emp.name, emp.id, emp.email, extra);
                    break;
                case 'Intern':
                    newEmp = new Intern(emp.name, emp.id, emp.email, extra);
                    break;
            }
            employees.push(newEmp);

            console.log(`${emp.type} Created!`);
            setTimeout(start, 1500)
        })
    })
}

const generateHTML = () => {
const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>

  <body>
    <div class="p-4">
        <h1 class = "text-center mb-5">EMPLOYEE DIRECTORY</h1>
        <div class = "container-fluid" style="display:flex; justify-content: space-evenly">
            
        ${employees.map(emp => emp.makeHTML())}

        </div>
    </div>
</body>
</html>
`

fs.writeFileSync("dist/index.html", html)
}
start()

