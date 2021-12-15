const inquirer = require('inquirer');

async function menu2() {
    const partyArray = [];
    let keepGoing = true;
    while (keepGoing == true) {
        const answers = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                message: 'What party member would you like to add?',
                choices: ['Tank', 'Healer', 'DPS', 'Finish']
            },
            {
                name: 'name',
                type: 'input',
                message: 'What is the party members name?',
                when: (answers) => answers.role !== 'Finish'
            },
        ])
        if (answers.role !== "Finish"){
            const newMember = await createMember(answers.name, answers.role)
            partyArray.push(newMember);
        } else {
            console.log(partyArray);
            keepGoing = false;
        }
    }
}

async function createMember(name, role) {
    let valueType = '';
    if (role === 'Tank') {
       valueType = 'shield'; 
    } else if (role === 'Healer') {
        valueType = 'healing';
    } else {
        valueType = 'damage';
    }
        const { value } = await inquirer.prompt([
            {
                name: 'value',
                type: 'input',
                message: `Enter this characters ${valueType} amount? (Please enter a number)`
            },
        ])
    return (`${name} is a ${role} with ${value} ${valueType}!`);
}

menu2();