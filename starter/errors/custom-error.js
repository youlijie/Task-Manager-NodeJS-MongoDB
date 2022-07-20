class CustomAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCsutomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCsutomError, CustomAPIError}