const WebhookService = require("../services/webhook-service");

const webhookService = new WebhookService();

class WebhookController {
    static async webhookHandler(req, res, next) {
        try {
            const { origin: referral } = req.params;

            const data = await webhookService.webhookHandler(referral, req.body);
            return res.done(data);
        }
        catch (e) {
            return next(Error.COULD_NOT_PROCESS_WEBHOOK);
        }
    }
}

module.exports = WebhookController;