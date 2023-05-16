import express, { Response } from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.get('/api', (_, res: Response) => {
  res.send({ message: 'hello from api' });
});

ViteExpress.listen(app, 3001, () =>
  console.log('Server is listening Port 3001')
);
