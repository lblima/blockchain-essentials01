import express from 'express';

const app = express();

app.use('/assets', express.static(`${__dirname}/public`));

app.route('/')
    .get((req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });

var test = {
    firstName: 'Leo',
    lastName: 'Lima'
};

app.route('/ajax-request')
    .get((req, res) => {
        res.send(JSON.stringify(test));
    });

app.listen(3000);