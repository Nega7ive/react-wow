const express = require("express");
const routes = require('./routes/');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const router = express.Router();

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api', router);

/** start server */
const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});