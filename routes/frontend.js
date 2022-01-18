const config = require('../config.json')

function authPage(app) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/src/index.html');
    });
};


function Panel(app, urlencodedParser) {
    app.post('/panel', urlencodedParser, (req, res) => {
        let token = req.body.token;

        if(token == config.token) {
           res.sendFile(__dirname + '/src/panel.html'); 
        } else {
            res.send('Better get the hell out of here, you are not the real Trojan.')
        }
    });
};


module.exports = {authPage, Panel}

