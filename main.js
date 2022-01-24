const express = require('express');
const app = express();
const web = require('./routes/listener');
const bodyParser = require('body-parser');
const website = require('./routes/frontend');
const ViberJS = require('./routes/backend');

web.initiateConfigLoader();

const config = web.getCurrentConfig();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

website.authPage(app);
website.Panel(app, urlencodedParser);
ViberJS.PanelAPI(app, urlencodedParser);

web.listen(app, config.port);
