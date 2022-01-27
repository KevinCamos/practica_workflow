const sender_sending = process.argv[6] || "kevincamossoto@gmail.com";
const API_KEY = process.argv[7];


const mandrill = require('node-mandrill')(API_KEY); 




//send an e-mail to jim rubenstein
mandrill('/messages/send', {
    message: {
        to: [{email: sender_sending}],
        from_email: sesender_sendingnd_from,
        subject: "Resultado del workflow ejecutado",
        text: `Se ha realizado un push en la rama main que ha provocado la ejecución del
        workflow nombre_repositorio_workflow con los siguientes resultados:
        - linter_job: ${process.argv[2]}
        - cypress_job: ${process.argv[3]}
        - add_badge_job: ${process.argv[4]}
        - deploy_job: ${process.argv[5]}`
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});
