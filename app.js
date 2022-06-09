const express = require('express');

const app = express();

const port = 3000;

const db = require('./config/database');

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
    console.log('Server is up and running at: http://localhost:${port}')
});

