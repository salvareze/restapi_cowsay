const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '127.0.0.1');
app.set('json spaces', 2);

app.use(morgan("combined"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/routes'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on http://${app.get('host')}:${app.get('port')}`);
});

class claseA{
    constructor(foo, bar){
        this.foo = foo;
        this.bar = bar;
    }
}
//feature-3
//feature-2
