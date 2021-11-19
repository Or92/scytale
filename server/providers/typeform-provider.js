const Executive = require('../models/executive');
const Company = require('../models/company');

class TypeformProvider {

    validateData(body) {
        try {
            const { form_response: { answers } } = body;
            const company_name = answers[0].text;
            const company_website = answers[1].text;
            const cloud_provider = answers[2].text;
            const num_of_executives = answers[3].number;
            const executives = [];
            for (let i = 0; i < num_of_executives; i++) {
                const name = answers[4].text;
                const email = answers[5].text;
                executives.push(new Executive({ name, email }));
            }
            const company = new Company({
                name: company_name,
                website: company_website,
                cloud_provider,
                executives
            });
            return company;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
}

module.exports = TypeformProvider;