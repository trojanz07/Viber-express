const viber = require('../modules/sendMessage');

function PanelAPI(app, urlencodedParser) {
    app.post('/send', urlencodedParser, (req, res) => {
        let message = req.body.message;

        viber.sendMessage(message);

        res.send('Sent!')
    });
}

// 5Hei+ui1DbGeyUkiSpXPcA==

module.exports = {PanelAPI}