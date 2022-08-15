

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
        const manager = Manager (name, id, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
};
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'additionalEmployee',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },
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
            message: "What is the employee's GitHub username?",
            when: (input) = input.role === Engineer
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your employee's school?",
            when: (input) = input.role === Intern
        },
        {
            type: 'list',
            name: 'additionalEmployee',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github } = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = Engineer (name, id, email, github);
            console.log(employee);
        }
        else if (role === "Intern") {
            employee = Intern (name, id, email, school);
            console.log(employee);
        }
        team.push(employee);
    })
};