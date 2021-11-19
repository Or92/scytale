const WebhookProvider = require('../enums/webhook-enum').WebhookProvider;
const DbService = require("./db-service");
const TypeformProvider = require('../providers/typeform-provider');

class WebhookService {
    providers = {
        [WebhookProvider.TYPEFORM]: new TypeformProvider(),
    }

    get DBService() {
        return new DbService();
    }

    async webhookHandler(referral, data) {
        try {
            const provider = this.providers[referral];

            const validated_data = provider.validateData(data);
            await this.DBService.create(validated_data);
            return;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
}

module.exports = WebhookService;