const Router = require('express').Router();
const webhookMiddleware = require('../middlewares/webhook-middleware').webhookMiddleware;
const Error = require('../config/error-codes');
const WebhookController = require('../controllers/webhook-controller');

Router.post('/:origin', webhookMiddleware, WebhookController.webhookHandler);


module.exports = Router;