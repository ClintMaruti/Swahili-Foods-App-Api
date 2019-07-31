const express = require('express');
const app = express();
const PORT =    process.env.PORT || 5000;
require('./src/db');

app.get('/', (req,res) => {
    res.send('We made it to Heroku!');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT}`));
