const batteryLevel = require("battery-level");

const getFileName = require('./modules/getFileName')
const logToFile = require('./modules/logTofile')
// const checkBatteryLevel = require('./modules/checkBatteryLevel')

const levels = [];
let fileName;

async function logBattery() {
    fileName = await getFileName() 
    setInterval(() => {
        batteryLevel()
            .then((level) => {
                if(level !== levels[levels.length-1]){
                    levels.push(level)
                    const data = parseInt(level * 100) + "% " + Date()
                    console.log('data : ', data);
                    logToFile(fileName,data)
                }
            })
            .catch((err) => console.log('err interval:', err));
    }, 5000);
}


//---------OK--------------------------
// async function start(){
//     fileName = await getFileName()
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