import express from 'express';
import { indexController } from './controllers';
import { aboutController } from './controllers/about';

const router = express.Router({});

router.use('/', indexController);
router.use('/about', aboutController);

export { router };
