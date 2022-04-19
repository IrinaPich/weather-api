import express from 'express';
import bodyParser from 'body-parser';

import countriesRoutes from './router/weather.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', countriesRoutes);

app.get('/', (req, res) => res.send('Homepage'));

app.listen(PORT, ()=> console.log(`Server Running on port: http://localhost:${PORT}`));

