//Employees
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//Generate HTML page
function generateHTML(team) {
//Manager card
    const generateManager = (data) => {
        return `
            <div class="card" style="width: 20rem;">
                <div class="card-header">
                    <h2>Manager: ${data.name}</h2>
                </div>
                <ul class="information">
                    <li>ID: ${data.id}</li>
                    <li>Email: ${data.email}</li>
                    <li>Office Number: ${data.officeNumber}</li>
                </ul>
            </div>\n`
    }

//Engineer card
    const generateEngineer = (data) => {
        return `
            <div class="card" style="width: 20rem;">
                <div class="card-header">
                    <h2>Manager: ${data.name}</h2>
                </div>
                <ul class="information">
                    <li>ID: ${data.id}</li>
                    <li>Email: ${data.email}</li>
                    <li>Github: ${data.github}</li>
                </ul>
            </div>\n`
    }

//Intern card
    const generateIntern = (data) => {
        return `
            <div class="card" style="width: 20rem;">
                <div class="card-header">
                    <h2>Manager: ${data.name}</h2>
                </div>
                <ul class="information">
                    <li>ID: ${data.id}</li>
                    <li>Email: ${data.email}</li>
                    <li>School: ${data.school}</li>
                </ul>
            </div>\n`
    }
//Array for team
    const teamArray = [];

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        if (employee instanceof Manager) {
            newArray.push(generateManager(employee));
        } else if (employee instanceof Engineer) {
            newArray.push(generateEngineer(employee));
        } else if (employee instanceof Intern) {
            newArray.push(generateIntern(employee));
        }
    }
//HTML skeleton
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <Title>Roster</title>
        </head>

        <body>
            <header>
                <h1>Roster</h1>
            </header>
            <main>
                ${teamArray.join('')}
            </main>
        </body>
        <script></script>
        </html>`;
}

module.exports = generateHTML