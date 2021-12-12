const core = require('@actions/core')
const fs = require("fs");

// const github = require('@actions/github')
/* const TelegramBot = require('node-telegram-bot-api');
 */
const resultado_test = core.getInput('resultado_test')



console.log(resultado_test)


try {


    const readme = "./README.md";
    var content = resultado_test != "failure" ? "success" : "failure";
    content = "RESULTADOS DE LOS ÚLTIMOS TEST: "+ content
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








    // // replace the value below with the Telegram token you receive from @BotFather
    // const token = core.getInput('token-telegram');
    // const nombre = core.getInput('myname');

    // // Create a bot that uses 'polling' to fetch new updates
    // const bot = new TelegramBot(token, { polling: true });
    // const chatId = core.getInput('id-chat-telegram')/* msg.chat.id; */

    // // send a message to the chat acknowledging receipt of their message
    // bot.sendMessage(chatId, `Workflow ejecutado correctamente tras el último commit. Saludos ${nombre}`);
