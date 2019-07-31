const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =    process.env.PORT || 5000;
const recipeRouter = require('./routes/recipe');
require('./src/db');

app.use(bodyParser.json());
app.use('/recipe', recipeRouter);

app.get('/', (req,res) => {
    res.send('We made it to Heroku!');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT}`));
