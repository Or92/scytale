const fs = require('fs');
const path = require('path');
const db = require('../db.json');

class DbService {
    records = 0;
    file_data = {};

    constructor() {
        this.records = db.length;
        this.file_data = db;
    }

    async create(data) {
        try {
            const file_path = path.join(__dirname, '../db.json');
            this.file_data.push(data);
            this.records += 1;
            await fs.writeFileSync(file_path, JSON.stringify(this.file_data));
            return;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }

    retrieve() { }

    update() { }

    delete() { }
}

module.exports = DbService;