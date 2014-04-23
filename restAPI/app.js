var express = require( 'express' ),
	bandMgr = require( './bandMgr' );
	
var app = express();

var allowCrossDomain = function( req, res, next ){
	res.header('Access-Control-Allow-Origin', '*');
	res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization' );
	
	if( 'OPTIONS' == req.method ){
		res.send( 200 );
	}
	else{
		next();
	}
};

app.configure( function() {
	app.use( express.logger('dev') );
	app.use( express.bodyParser() );
	app.use( express.methodOverride() );
	app.use( allowCrossDomain );
});

// Show methods
app.get( '/shows', bandMrg.getAllShows );
app.get( '/shows/:id', bandMrg.getShowById );
app.post( '/shows', bandMrg.addShow );
app.put( '/shows/:id', bandMrg.updateShow );
app.delete( '/shows/:id', bandMrg.deleteShow );

// Picture methods
app.get( '/pictures', bandMrg.getAllPictures );
app.get( '/pictures/:id', bandMrg.getPictureById );
app.post( '/pictures', bandMrg.addPicture );
app.put( '/pictures/:id', bandMrg.updatePicture );
app.delete( '/pictures/:id', bandMrg.deletePicture );

// Band Note methods 
app.get( '/notes', bandMrg.getAllNotes );
app.get( '/notes/:id', bandMrg.getNoteById );
app.post( '/notes', bandMrg.addNote );
app.put( '/notes/:id', bandMrg.updateNote );
app.delete( '/notes/:id', bandMrg.deleteNote );

app.listen( 3000 );