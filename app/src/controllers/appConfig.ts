import express, {Express} from 'express';
//@ts-ignore
import cors from 'cors';
import router from './routes';


export default function appConfig(app: Express) {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.use('/', router)
}