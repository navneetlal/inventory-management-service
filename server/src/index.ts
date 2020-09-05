import express from 'express';
import helmet from 'helmet';

import { Request, Response } from 'express';

import routes from './routes';

const PORT = process.env.PORT || 3000;

const app = express()

app.use(helmet())
app.use(express.json())

app.use('/api', routes)

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.listen(PORT, () => console.log("Server is running at http://localhost:3000"))