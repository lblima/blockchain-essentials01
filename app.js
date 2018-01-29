import express from 'express'; 

const app = express();

app.route('/')
    .get((req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });

app.listen(3000);