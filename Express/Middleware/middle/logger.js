const fs = require("fs")
const path = require("path")
const fsPromises = require("fs/promises")

const logger = async (message,LogName) =>{
    const currentDate = new Date().toUTCString()
    const logMessage = `${currentDate}\t${message}`

try{
    if(!fs.existsSync(path.join(__dirname,'..','logs'))){
        await  fsPromises.mkdir(path.join(__dirname,'..','logs'))
    }

    await fsPromises.appendFile(path.join(__dirname,'..','logs',LogName),logMessage)


}
catch (error) {
    console.log(error)
}

}
module.exports = logger