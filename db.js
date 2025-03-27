const mysql =require('mysql2/promise')

const client = mysql.createPool({
    uri: process.env.CONNECTION_STRING
});

async function selectCustomers() {

    try {
    const res = await client.query('SELECT * FROM clientes');
    return res[0]; 

    } catch (err) {
        console.error('Erro ao buscar:',err);
        throw err;
    }
}
 
module.exports = { selectCustomers }