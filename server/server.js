const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const db = require('./config/database');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

const initApp = async () => {
    console.log('Testing the database connection..');

    try {
        await db.sync({ alter: true });
        console.log('Connection has been established successfully.');

        
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
}

app.listen(port, () => {
    initApp();
    console.log('Server is up and running at: http://localhost:3000')
});

