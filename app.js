const batteryLevel = require("battery-level");
const fs = require('fs')
const inquirer = require('inquirer');

let fileName
let a
const levels = [];

async function getFileName() {
    const answer = await inquirer.prompt([{
        type: 'input',
        name: 'fileName',
        message: 'enter File Name :',
    }])
    console.log(answer.fileName + '.txt');
    fileName = answer.fileName + '.txt'

    setInterval(() => {
        batteryLevel()
            .then((level) => my(level))
            .catch((err) => console.log('err interval:', err));
    }, 1000);

}
getFileName()






function my(level) {
    if (!levels.includes(level)) {
        levels.push(level)
        const data = parseInt(level * 100) + "% " + Date()
        try {
            fs.appendFile('data/' + fileName, data + "\n", err => err ? console.log("EEEror : ", err) : a = '')
        } catch (err) {
            console.log('err fun :', err);
        }
        console.log('data : ', data);
    }
}