const fs = require("fs");

const resultado_test = process.argv[2];



var succes= "https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg"
var fail =  "https://img.shields.io/badge/test-failure-red";
console.log(resultado_test)

const readme = "./README.md";
var content = resultado_test != "failure" ? succes:fail;

content =`RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${content})`
try {  
    fs.readFile(readme, 'utf8', function (err, data) {

        data = data.replace(`RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${succes})`, content)
        data = data.replace(`RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${fail})`, content)
        fs.writeFile(readme, data, function (err, result) {
            if (err) console.log('error', err);
        });
    });

} catch (error) {

    var content = `RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${fail})`;
    fs.readFile(readme, 'utf8', function (err, data) {

        data = data.replace(`RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${succes})`, content)
        data = data.replace(`RESULTADOS DE LOS ÚLTIMOS TEST: ![Image text](${fail})`, content)
        fs.writeFile(readme, data, function (err, result) {
            if (err) console.log('error', err);
        });
    });

}
