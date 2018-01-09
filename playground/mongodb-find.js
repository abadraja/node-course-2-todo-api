const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        console.log('Unable to connect to Mongodb server');
    console.log('Connected to server');

    db.collection('Todos').find({
        _id: new ObjectID('5a548e5562b4cf37c0c2fd78')
    }).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos')
    });

    db.close();
});