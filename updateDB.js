const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB'); 

        const database = client.db('testdb');
        const collection = database.collection('testcollection');

        const updateResult = await collection.updateOne(
            // updateOne 하나의 데이터만 바꾼다는거 updateMany가 다바꾸는거
            // DB에서 이름이 kimjungsik인 데이터의 나이 바꾸기
            { name : "kimjungsik"},
            { $set : {age:20}}
        );
        console.log('Updater document count :',updateResult.modifiedCount);
    } catch(error){
        console.error('Error :',error);
    } finally{
         await client.close();
    }
};

main();