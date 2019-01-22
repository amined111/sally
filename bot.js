const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "A";


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "485917652120764429") return;
 
if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/amine12a");
     console.log('test' + argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} 

if (message.content.startsWith(prefix + 'setwatch')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} 
if (message.content.startsWith(prefix + 'setlisteng')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}
  
});




client.login(process.env.BOT_TOKEN);
