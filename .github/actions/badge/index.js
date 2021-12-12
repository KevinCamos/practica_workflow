/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 434:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(434)
const fs = __nccwpck_require__(147);

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
    core.setOutput = ("frase-de-prueba resultado_test", resul)


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

})();

module.exports = __webpack_exports__;
/******/ })()
;