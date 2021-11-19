const Error = {
    INVALID_WEBHOOK_PROVIDER: {
        success: false,
        message: 'INVALID_WEBHOOK_PROVIDER',
        code: '500',
        description: ''
    },
    GENERAL_ERROR: {
        success: false,
        message: 'GENERAL_ERROR',
        code: '500',
        description: ''
    },
    NOT_FOUND: {
        success: false,
        message: 'NOT_FOUND',
        code: '400',
        description: ''
    },
    COULD_NOT_PROCESS_WEBHOOK: {
        success: false,
        message: 'COULD_NOT_PROCESS_WEBHOOK',
        code: '500',
        description: ''
    }
}

module.exports = Error;