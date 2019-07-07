const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
    console.log(req.headers.origin);
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, err => {
    console.log(`Server start listening on http://localhost:${port}`);
});
