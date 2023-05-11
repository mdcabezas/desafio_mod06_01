const fs = require("fs");

const fnReadFile = name => fs.readFileSync(name, "utf8");

const fnValidate = value => {
  if (value.length !== 5) {
    console.log("Debe ingresar todos los parámetros!")
    return
  }
}

const fnSerialize = (data) => {
  fnValidate(data);
  return { nombre: data[0], edad: data[1], animal: data[2], color: data[3], enfermedad: data[4] }
}

const fnRegister = (file, payload) => {
  const contentFile = JSON.parse(fnReadFile(file));
  contentFile.push(fnSerialize(payload));
  fs.writeFileSync(file, JSON.stringify(contentFile));
}

module.exports = { fnReadFile, fnRegister }