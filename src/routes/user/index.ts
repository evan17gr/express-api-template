import * as express from 'express';
import { get, remove, update, create } from '../../controllers/user/index';

const router = express.Router();

router.get('/', get);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', remove);
