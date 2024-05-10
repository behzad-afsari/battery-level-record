const inquirer = require('inquirer');

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

module.exports = getFileName