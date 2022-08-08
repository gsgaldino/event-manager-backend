import express, { application } from 'express';
import routes from './routes';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

class App {
  public express = application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.express.use('/api/v1', routes);
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan('dev'));
    this.express.use(helmet());
  }
}

export default new App().express;
