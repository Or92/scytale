class Company{
    constructor(company) {
        this.name = company.name;
        this.website = company.website;
        this.cloud_provider = company.cloud_provider;
        this.executives = company.executives;
    }
}

module.exports = Company;