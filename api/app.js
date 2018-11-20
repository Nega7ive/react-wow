import express, { Router } from "express";
import routes from './routes/';
import cors from 'cors';
import { json } from 'body-parser';
import helmet from 'helmet';

const app = express();
const router = Router();

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(json());
app.use(helmet());

app.use('/api', router);

/** start server */
const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});