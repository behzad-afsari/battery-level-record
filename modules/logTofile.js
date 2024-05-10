const fs = require('fs')

function logToFile(fileName,data){
    try {
        fs.appendFile('data/' + fileName, data + "\n", (err) => {
            if(err) throw new Error
        })
    } catch (err) {
        console.log('err fun :', err);
    }
}

module.exports = logToFile