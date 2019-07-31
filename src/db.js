const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://DevClint:eastood0009@chakula-z18vg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, () => {
    console.log("Connected to the db!");
});