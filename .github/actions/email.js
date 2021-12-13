const core = require('@actions/core')
// const github = require('@actions/github')
/* const TelegramBot = require('node-telegram-bot-api');
 */
const apy_key = core.getInput('apy_key')

const mandrill = require('node-mandrill')(apy_key); 



const linter_job = core.getInput('linter_job')
const cypress_job = core.getInput('cypress_job')
const add_badge_job = core.getInput('add_badge_job')
const deploy_job = core.getInput('deploy_job')
const send_from = core.getInput('send_from')
const send_to = core.getInput('send_to')

//send an e-mail to jim rubenstein
mandrill('/messages/send', {
    message: {
        to: [{email: send_to}],
        from_email: send_from,
        subject: "Resultado del workflow ejecutado",
        text: `Se ha realizado un push en la rama main que ha provocado la ejecución del
        workflow nombre_repositorio_workflow con los siguientes resultados:
        - linter_job: ${linter_job}
        - cypress_job: ${cypress_job}
        - add_badge_job: ${add_badge_job}
        - deploy_job: ${deploy_job}`
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});
