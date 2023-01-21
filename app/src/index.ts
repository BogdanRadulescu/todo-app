import express from 'express';
import nunjucks from 'nunjucks'

const app = express();
const port = 8080; // default port to listen

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.engine('html', nunjucks.render);
app.set('view engine', 'njk');

app.use('/dist', express.static('dist'))

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.render('index')
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );