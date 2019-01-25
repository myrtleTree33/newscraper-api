import { Router } from 'express';
import { ensureAuth } from '../utils/socialAuth';
import Item from '../models/Item';

const routes = Router();

routes.get('/', async (req, res) => {
  const items = await Item.find({}).limit(10);
  res.json({ items: items });
});

export default routes;
