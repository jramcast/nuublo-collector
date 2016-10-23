const MongoClient = require('mongodb').MongoClient;

module.exports = {
    connect
};

const dbUrl = 'mongodb://localhost:27017/nuublo';

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });
}