// Pending
// Resolved
// Rejected
 
/* const getData = new Promise(async(resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users') // 1
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => {
            reject(error);
        });
})
 
console.log("getData 1: ", getData)
setTimeout(() => {
    console.log("getData 2: ", getData)
}, 5000);
 */

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require('./models/User');
 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
app.use(express.json());
 
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
})
 