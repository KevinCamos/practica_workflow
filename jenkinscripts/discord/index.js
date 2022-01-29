const discord_token =  process.argv[2]
const id_channel =  process.argv[3]


const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);

  client.channels
    .fetch(id_channel)
    .then((channel) => channel.send(`
    Pipeline realizada con pleno éxito
    
    `))
    .catch((err) => console.log("Could not find the channel."));
});

client.login(discord_token);
setTimeout(function () {
  process.exit(0);
}, 20000);