const core = require('@actions/core')
const discord_token = core.getInput('discord_token')
const id_channel = core.getInput('id_channel')
// const commit_author = core.getInput('commit_author')
// const commit_committer = core.getInput('commit_committer')
// const commit_message = core.getInput('commit_message')




const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);
  // ${commit_author}
  // ${commit_committer}
  // ${commit_message}
  client.channels
    .fetch(id_channel)
    .then((channel) => channel.send(`
    COMMIT AUTHOR:    
    COMMIT COMMITTER: 
    COMMIT MESSAGE:   
    
    
    `))
    .catch((err) => console.log("Could not find the channel."));
});

client.on("messageCreate", (message) => {
  console.log(message.channel);
  if (message.author.bot) return false;
  message.channel.send("Ei");
  //   console.log(`Message from ${message.author.username}: ${message.content}`);
});

client.login(discord_token);
