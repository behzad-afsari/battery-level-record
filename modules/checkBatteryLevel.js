// DONT USE // this module is for last version hat function combined in one file

function checkBatteryLevel(level,levels) {
    if (!levels.includes(level)) {
        levels.push(level)
        const data = parseInt(level * 100) + "% " + Date()
        console.log('data : ', data);
        try {
            fs.appendFile('data/' + fileName, data + "\n", (err) => {
                if(err) throw new Error
            })
        } catch (err) {
            console.log('err fun :', err);
        }
    }
}

module.exports = checkBatteryLevel