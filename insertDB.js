const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB'); 

        const database = client.db('testdb');
        const collection = database.collection('testcollection');

        // DB에 데이터 집어넣기
        const newDocument = {name : 'kimjungsik', age : 18};
        const insertResult = await collection.insertOne(newDocument);
        console.log('Insertes document:', insertResult.insertedId);
    } catch(error){
        console.error('Error :',error);
    } finally{
         await client.close();
    }
};

main();