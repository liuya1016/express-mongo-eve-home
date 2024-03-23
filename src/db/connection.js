const monk = require('monk');

const dbUrl = 'mongodb://Liuya:Liuya@isit.my.to:27017/?authSource=LiuyaDB';

// console.log(process.env.NODE_ENV);

const db = monk(dbUrl);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = db;
