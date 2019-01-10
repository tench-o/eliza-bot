var Botkit = require('botkit');
var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.SLACK_TOKEN
}).startRTM();

controller.hears(['^(いまさら|今更)(だけど|ですが)、?(.*)'], 'direct_message', function(bot, message) {
  var msg = message.match[3];
  bot.reply(message, '代わりに質問しておきますね。');
  
  bot.say({
    text: '今更ながら質問です。' + msg,
    channel: process.env.QUESTION_CHANNEL_ID
  });
});


controller.hears(['^シェア(.*)'], 'direct_message', function(bot, message) {
  var msg = message.match[1];
  bot.reply(message, 'シェアしておきますね。');
  
  bot.say({
    text: 'シェアさせていただきます！\n' + msg,
    channel: process.env.SHARE_CHANNEL_ID
  });
});

