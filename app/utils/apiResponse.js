// helpers/apiResponse.js

function apiResponse(res, code = 200, message = null, errors = null, data = null) {
    const response = {
        status: code,
        message: message,
    };

    if (data !== null && errors === null) {
        response.data = data;
    } else if (errors !== null && data === null) {
        response.errors = errors;
    }

    return res.status(code).json(response);
}

module.exports = apiResponse;
