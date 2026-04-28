import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority');

client.connect(err => {
  const db = client.db('test');
  // ...
});

