import * as dotenv from 'dotenv';
dotenv.config();

export default {
    APP: process.env.APP || 'development',
    PORT: process.env.PORT || '3000',
    DB_DIALECT: process.env.DB_DIALECT || 'mongo',
    DB_HOST: process.env.DB_HOST || 'mongodb://admin:admin08@ds035683.mlab.com:35683/student',
    DB_NAME: process.env.DB_NAME || 'book',
    DB_PASSWORD: process.env.DB_PASSWORD || 'db-password',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_USER: process.env.DB_USER || 'root'
};
