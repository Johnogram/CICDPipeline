import express from 'express';
import { indexController } from './controllers';

const router = express.Router({});

router.use('/', indexController);

export { router };
