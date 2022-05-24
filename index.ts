import express, { Express } from 'express'
import dotenv from 'dotenv'
import "reflect-metadata"
import demoRouter from './routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(demoRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})