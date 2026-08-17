
const { Router } = require('express');

const { home } = require('../controllers/appController');

const appRouter = Router();

appRouter.get('/', home);

module.exports = appRouter;