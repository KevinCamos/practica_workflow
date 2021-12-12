const core = require('@actions/core')
const fs = require("fs");

// const github = require('@actions/github')
/* const TelegramBot = require('node-telegram-bot-api');
 */
const resultado_test = core.getInput('resultado_test')

var succes= "https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg"
var fail =  "https://img.shields.io/badge/test-failure-red";
console.log(resultado_test)


try {

    const readme = "./README.md";
    var content = resultado_test != "failure" ? succes:fail;
    content =`RESULTADOS DE LOS ÚLTIMOS TEST: + ![Image text](${content})`
    fs.readFile(readme, 'utf8', function (err, data) {
        fs.writeFile(readme, content, function (err, result) {
            if (err) console.log('error', err);
        });
    });
    core.setOutput = ("frase-de-prueba resultado_test", resultado_test)


} catch (error) {
    var content =  "failure";


    fs.readFile(readme, 'utf8', function (err, data) {
        fs.writeFile(readme, content, function (err, result) {
            if (err) console.log('error', err);
        });
    });

    core.setFailed(error.message)
}


