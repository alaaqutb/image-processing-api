import express from 'express';
import image from './api/image';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('please get Image...');
});
routes.use('/api/image', image);

export default routes;
