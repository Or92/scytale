const WebhookProvider = require('../enums/webhook-enum').WebhookProvider;
const Error = require('../config/error-codes');

function webhookMiddleware(req, res, next) {
    //NOTE: this middleware will verify the webhooks sent and pass them over the pipeline in case these are valid will fail otherwise
    const { origin } = req.params;

    switch (origin.toLowerCase()) {
        case WebhookProvider.TYPEFORM:
            //NOTE: call the crypto decrypt and verify in case the webhook is set to be decrypted and signed by the sender
            return next();
        default:
            return next(Error.INVALID_WEBHOOK_PROVIDER);
    }
}

module.exports = {
    webhookMiddleware
}