import express from 'express';
import nunjucks from 'nunjucks';
import TodoService from './TodoService';

const app = express();
const port = 8080; // default port to listen

const service = new TodoService();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.engine('html', nunjucks.render);
app.set('view engine', 'njk');

app.use('/dist', express.static('dist'))

app.get("/", ( req, res ) => {
    res.render('index')
});

app.get("/list", (req, res) => res.json(service.GetAll()))

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );