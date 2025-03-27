
require("dotenv").config();
 
const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db'); 

app.use(express.json());
 
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.listen(port);
console.log('API funcionando!');

app.get('/clientes', async (req, res) => {
    const results = await db.selectCustomers();
    res.json(results);
})

