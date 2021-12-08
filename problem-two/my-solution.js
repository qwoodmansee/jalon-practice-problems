const inquirer = require('inquirer');
const partyArray = []

function menu() {
    inquirer.prompt([
        {
            name: 'init',
            type: 'list',
            message: 'What party member would you like to add?',
            choices: ['Tank', 'Healer', 'DPS', 'Finish']
        },
    ])
        .then((answers) => {
            if (answers.init === 'Tank') {
                addTank();
            } else if (answers.init === 'Healer') {
                addHealer();
            } else if (answers.init === 'DPS') {
                addDamage();
            } else {
                finish();
            }
        })
};

function addTank() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the party members name?'
        },
        {
            name: 'shield',
            type: 'input',
            message: 'Enter this characters shield amount? (Please enter a number)'
        },
    ])
        .then((answers) => {
            partyArray.push(`${answers.name} is a tank with ${answers.shield} shield!`)
        }).then(function (err) {
            if (err) {
                console.log(err)
            }
            console.log('Tank added to your party!')
            menu();
        })
};

function addHealer() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the party members name?'
        },
        {
            name: 'healing',
            type: 'input',
            message: 'Enter this characters healing amount? (Please enter a number)'
        },
    ])
        .then((answers) => {
            partyArray.push(`${answers.name} is a healer with ${answers.healing} healing!`)
        }).then(function (err) {
            if (err) {
                console.log(err)
            }
            console.log('Healer added to your party!')
            menu();
        })
};

function addDamage() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the party members name?'
        },
        {
            name: 'damage',
            type: 'input',
            message: 'Enter this characters damage amount? (Please enter a number)'
        },
    ])
        .then((answers) => {
            partyArray.push(`${answers.name} is a DPS with ${answers.damage} damage!`)
        }).then(function (err) {
            if (err) {
                console.log(err);
            }
            console.log('DPS added to your party!')
            menu();
        })
};

function finish() {
    console.log(partyArray)
};

menu();