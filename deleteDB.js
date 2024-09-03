const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB'); 

        const database = client.db('testdb');
        const collection = database.collection('testcollection');

        // DB에서 데이터 삭제하기
        const deleteResult = await collection.deleteOne({ name : "kimjungsik"});
        console.log('Delete document count :',deleteResult.deletedCount); 
    } catch(error){
        console.error('Error :',error);
    } finally{
         await client.close();
    }
};

main();