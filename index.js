const express = require('express');
const auth = require('./auth');
const app = express();
app.use(auth);

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.listen(3000, () => console.log('Hello world!!'));
