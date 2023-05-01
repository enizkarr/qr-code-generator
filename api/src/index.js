const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(44300, () => {
    console.log('Server is listening on port 44300')
})