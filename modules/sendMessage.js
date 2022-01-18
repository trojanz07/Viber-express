const fetch = require('node-fetch');

const config = require('../config.json');



function sendMessage(message) {
    
const data = {
    "receiver":config.bot.receiver,
    "min_api_version":1,
    "sender":{
       "name":config.bot.name,
       "avatar":config.bot.avatar
    },
    "tracking_data":"tracking data",
    "type":"text",
    "text": message,
}
    fetch('https://chatapi.viber.com/pa/send_message', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Viber-Auth-Token': config.bot.token,
         },
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(json => {
        console.log(json);
    })
}

module.exports = {sendMessage}