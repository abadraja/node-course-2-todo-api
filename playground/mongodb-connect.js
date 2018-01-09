const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        console.log('Unable to connect to Mongodb server');
    console.log('Connected to server');

    // db.collection('Todos').insertOne({
    //     text: 'ah ma gad! new record',
    // }, (err, result) => {
    //     if (err)
    //         return console.log('unable to insert todo');
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'John Snow',
        age: 42,
        location: 'Winter'
    }, (err, result) => {
        if (err)
            return console.log('unable to insert todo');
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.close();
});