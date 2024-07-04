const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Ciao!'));

const offersRouter = require('./routes/offers');
app.use('/api/v1/offers', offersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Pallino Test is running on port ${port}`);
});