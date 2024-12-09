const { Router } = require('express');
const { checkIfLoggedIn } = require('../utils/auth');

const newFileRouter = Router();

newFileRouter.get('/', checkIfLoggedIn);

module.exports = { newFileRouter };
