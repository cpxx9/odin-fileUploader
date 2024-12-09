const { Router } = require('express');
const { checkIfLoggedIn } = require('../utils/auth');

const createFolderRouter = Router();

createFolderRouter.get('/', checkIfLoggedIn);

module.exports = { createFolderRouter };
