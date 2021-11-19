
function done(data = {}) {
    return this.status(200).json({
        success: true,
        data
    })
}

module.exports = (response) => {
    response.done = done;
}