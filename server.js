var express 		= require('express'),
    wine 			= require('./routes/wines');
var port			= process.env.PORT || 8080;



var morgan 			= require('morgan');
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');
var app 			= express();
var env 			= process.env.NODE_ENV || 'development';
var router 			= express.Router();




if ('development' == env) {
	console.log('env is development');
}else {
	console.log('env is operation');
}


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());



 
router.get('/wines', wine.findAll);
router.get('/wines/:id', wine.findById);
router.post('/wines', wine.addWine);
router.put('/wines/:id', wine.updateWine);
router.delete('/wines/:id', wine.deleteWine);

app.use('/', router);
 
app.listen(port);
console.log('Listening on port ' + port);

