const core = require('@actions/core')
const discord_token = core.getInput('discord_token')
const id_channel = core.getInput('id_channel')
const commit_author = core.getInput('commit_author')
const commit_committer = core.getInput('commit_committer')
const commit_message = core.getInput('commit_message')


const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);

  client.channels
    .fetch(id_channel)
    .then((channel) => channel.send(`
    COMMIT AUTHOR:    ${commit_author}
    COMMIT COMMITTER:     ${commit_committer}
    COMMIT MESSAGE:       ${commit_message}
    
    `))
    .catch((err) => console.log("Could not find the channel."));
});

client.login(discord_token);
setTimeout(function () {
  process.exit(0);
}, 20000);