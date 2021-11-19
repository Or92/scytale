const express = require('express');
const bodyParser = require('body-parser');
const responseError = require('./config/response-error');
const responseDone = require('./config/response-done');
const Error = require('./config/error-codes');
const WebhookRouter = require('./routers/webhook-router');

//NOTE: config
responseError(express.response);
responseDone(express.response);

//NOTE: init
const app = express()

//NOTE: set middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use(bodyParser.json({ type: 'application/*+json' }))

//NOTE: define routers
app.use('/webhook', WebhookRouter);

//NOTE: error handling
app.all('*', (req, res, next) => {
    return res.error(Error.NOT_FOUND);
});

app.use((err, req, res, next) => {
    if (err) {
        console.error(err);
        if (err.message) {
            return res.error(err);
        }
        else {
            return res.error(Error.GENERAL_ERROR);
        }
    }
    else {
        return next();
    }
})

app.listen(process.env.PORT || 1234);