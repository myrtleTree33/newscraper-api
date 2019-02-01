import { Router } from 'express';
import { ensureAuth } from '../utils/socialAuth';
import Item from '../models/Item';
import NewsSource from '../models/NewsSource';

const routes = Router();

const MAX_NUM_ITEMS = 10;

routes.get('/', async (req, res) => {
  const { limit = MAX_NUM_ITEMS } = req.params;

  const items = await Item.find(
    {},
    {},
    {
      skip: 0, // Starting Row
      limit: Math.min(limit, MAX_NUM_ITEMS),
      sort: {
        lastUpdated: -1
      }
    }
  );

  res.json({ items });
});

/**
 * Gets the number of items in DB
 */
routes.get('/count', async (req, res) => {
  const count = await Item.find({}).count;
  res.json({ count });
});

export default routes;
