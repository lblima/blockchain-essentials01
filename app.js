import express from 'express'; 

const app = express();

app.use('/assets', express.static(`${__dirname}/public`));

app.route('/')
    .get((req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });

app.route('/ajax-request')
    .get((req, res) => {
        res.send('Ajax response...');
    });

app.listen(3000);