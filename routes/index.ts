import express, { Request, Response } from 'express'

const router = express.Router();

router.get('/demo', (req: Request, res: Response) => {
    res.send('demo')
})

router.get('/demo2', (req: Request, res: Response) => {
    res.send('demo2')
})

export default router