const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB'); 

        const database = client.db('testdb');
        const collection = database.collection('testcollection');

        // DB에 뭐있는지 보기
        const foundDocuments = await collection.find({}).toArray();
        console.log('Documents found :',foundDocuments);
    } catch(error){
        console.error('Error :',error);
    } finally{
         await client.close();
    }
};

main();