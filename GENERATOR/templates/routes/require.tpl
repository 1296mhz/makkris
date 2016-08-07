var express = require('express');
var router = express.Router();
var <%name%> = require('../controllers/<%name%>');
var Utilz = require('../libs/Utilz');
var utilz = new Utilz();

router.get('/', utilz.isLoggedIn);


