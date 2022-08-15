const generateHTML = require('./src/generateHTML.js');

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/employee');

const team = [];


const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
};
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: "Would you like to add another employee?",
            default: false,
        },
    ])
    .then((employeeData) => {
        if (employeeData.additionalEmployee === true) {
           employeeType()
        } else {
            return;
        }
    })
}
    const employeeType = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'additionalEmployee',
                message: "What kind of employee would you like to add?",
                choices: ["Engineer", "Intern"]
            }
        ]).then((employeeData) => {
            if (employeeData.additionalEmployee === "Engineer") {
                engineerPrompt()
            } else {
                internPrompt()
            } 
        })
    }
    const engineerPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the employee's GitHub username?"
            }
        ])
        .then(engineerData => {
            const { name, id, email, github} = engineerData;
            const engineer = new Engineer (name, id, email, github);
            team.push(engineer);
            console.log(engineer);
            addEmployee();
            employeeType();
        })
    }
    const internPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's school?"
            }
        ])
        .then(internData => {
            const { name, id, email, school} = internData;
            const intern = new Intern (name, id, email, school);
            team.push(intern);
            console.log(intern);
            addEmployee();
            employeeType();
        })
    }
    const newEmployee = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: ''
            }
        ])
    }


    (employeeData => {
        let { name, id, email, role, github } = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        team.push(employee);
    });

const writeFile = data => {
    fs.writeFile(dist/index.html), data => {
        console.log("Your team profile has been created!")
    }
};

addManager()
    .then(addEmployee)
    // .then(team => {
    //     return generateHTML(team);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // });