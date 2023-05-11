const { fnReadFile, fnRegister } = require("./operaciones.js")
const inputArguments = process.argv.slice(2);
const fileName = "citas.json"

switch (inputArguments[0]) {
    case "leer":
        console.log(fnReadFile(fileName))
        break;
    case "registrar":
        fnRegister(fileName, inputArguments.slice(1));
        break;
    default:
        console.error("Ingresa un parámetro válido!")
}