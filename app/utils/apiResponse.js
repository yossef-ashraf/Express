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

// const apiResponse = require('../utils/apiResponse');
// return apiResponse(res, 400, 'Error occurred', errors);
// return apiResponse(res, 200, 'Data retrieved successfully', null, data);