const express = require( 'express' );
const app = express();

//KEEP THIS TO LET MY INDEX.HTML RUNS WITHOUT SET UP AN ENDPOINT FOR IT
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
//console.log(  __dirname );

//INSTRUCTING TO THE SERVER WHERE WILL PLACED THE EJS FILES
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/cars', function( request, response ){
    response.render( 'cars' );
});

app.get( '/cats', function( request, response ){
    response.render( 'cats' );
});

app.get( '/form', function( request, response ){
    response.render( 'form' );
});



app.listen(8000, function() {
    console.log( 'This server is running in port 8000.' );
});