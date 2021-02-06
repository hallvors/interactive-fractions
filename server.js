const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./web/index.html', { root: __dirname });
});

app.get('/js/paper.js', (req, res) => {
    res.sendFile('./node_modules/paper/dist/paper-full.js', { root: __dirname });
});

app.listen(3100, () => console.log('Gator app listening on port 3100!'));