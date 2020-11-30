import bodyParser from 'body-parser';
import express from 'express';
import { authRoutes } from './routes/auth.routes';
import { authorRoutes } from './routes/authors.routes';
import { bookRoutes } from './routes/books.routes';
import { saleRoutes } from './routes/sale.routes';
import { userRoutes } from './routes/users.routes';
import socketio from 'socket.io';
import * as path from 'path';
import { any } from 'sequelize/types/lib/operators';
// Instance the express framework
const app = express();

// Setting the port of aplication server
app.set('port', 5000);

// Middlewares
app.use(express.json()); // Poder interpretar json en las peticiones

// Load the file routes users
app.use('/users', userRoutes.router);

app.use('/books', bookRoutes.router);

app.use('/authors', authorRoutes.router);

app.use('/sales', saleRoutes.router);

app.use('/login', authRoutes.router);


// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
});

let io = new socketio.Server(server);
io.on('connection', (socket: any)=> {
    console.log('User connected');

    socket.on('message',(message:any)=>{
        io.emit('message',message );
        console.log(message);
    })
});


app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve('./client/index.html'));
});