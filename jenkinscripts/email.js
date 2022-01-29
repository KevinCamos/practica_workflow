const sender_sending = process.argv[6];
const API_KEY = process.argv[7];


const mandrill = require('node-mandrill')(API_KEY); 




//send an e-mail to jim rubenstein
mandrill('/messages/send', {
    message: {
        to: [{email: sender_sending}],
        from_email: sender_sending,
        subject: "Resultado de la pipeline ejecutada",
        text: `Se ha realizado un push en la rama main que ha provocado la ejecución del
        workflow nombre_repositorio_workflow con los siguientes resultados:
        - Linter_stage: ${process.argv[2]}
        - Test_stage: ${process.argv[3]}
        - Update_readme_stage: ${process.argv[4]}
        - Deploy_to_Vercel_stage: ${process.argv[5]}`
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});
