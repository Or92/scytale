
function error(err) {
    const { message, code, description } = err;

    return this.status(code).json({
        message,
        description
    })
}

module.exports = (response) => {
    response.error = error;
}