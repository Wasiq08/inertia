import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import routes from './routes/index';
import * as errorHandler from './helpers/errorHandler';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.setRoutes();
        this.catchErrors();
    }

    private setMiddlewares(): void {
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
    }

    private setRoutes(): void {
        this.express.use('/v1', routes);
    }

    private catchErrors(): void {
        this.express.use(errorHandler.notFound);
        this.express.use(errorHandler.internalServerError);
    }
}

export default new App().express;
