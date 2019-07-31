const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const PORT =    process.env.PORT || 5000;
const recipeRouter = require('./routes/recipe');
require('./src/db');

app.use(bodyParser.json());
app.use('/recipe', recipeRouter);

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT}`));
