const batteryLevel = require("battery-level");
const fs = require('fs')
const inquirer = require('inquirer');

const levels = [];
let fileName;
let a

const getFileName = async () => {
    const answer = await inquirer.prompt([{
        type: 'input',
        name: 'userFileName',
        message: 'enter File Name :',
    }])
    // const userFileName = answer.fileName + '.txt'
    // return userFileName
    return answer.userFileName + '.txt'
}

function checkBatteryLevel(level) {
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

async function logBattery() {
    fileName = await getFileName() 
    setInterval(() => {
        batteryLevel()
            .then((level) => checkBatteryLevel(level))
            .catch((err) => console.log('err interval:', err));
    }, 1000);
}


//---------OK--------------------------
// async function start(){
//         fileName = await getFileName()
//     console.log('++++++',fileName);
//     logBattery()
// }

// start()

//---------OK--------------------------
// getFileName().then(FN => {
    //     fileName = FN
    //     console.log('++++++', FN);
    //     logBattery()
    // }).catch( err => console.log(err) )
    
//---------OK--------------------------
logBattery()