const axios = require('axios');
const crypto = require('crypto');

const SMSMisr = async (phone, message) => {
    try {
        const response = await axios.post('https://smsmisr.com/api/SMS', null, {
            params: {
                environment: '',
                username: '',
                password: '',
                language: '',
                sender: '',
                mobile: phone,
                message: message,
                DelayUntil: ''
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending SMS:', error);
        throw error;
    }
};

const OTPMisr = async (phone, message) => {
    try {
        const response = await axios.post('https://smsmisr.com/api/OTP', null, {
            params: {
                environment: '',
                username: '',
                password: '',
                language: '',
                sender: '',
                mobile: phone,
                template: '',
                otp: message,
                DelayUntil: ''
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};

const SMSViklink = async (phone, message) => {
    const data = crypto.randomBytes(16);

    // Set version to 0100
    data[6] = (data[6] & 0x0f) | 0x40;
    // Set bits 6-7 to 10
    data[8] = (data[8] & 0x3f) | 0x80;

    const smsId = [
        data.slice(0, 4).toString('hex'),
        data.slice(4, 6).toString('hex'),
        data.slice(6, 8).toString('hex'),
        data.slice(8, 10).toString('hex'),
        data.slice(10).toString('hex')
    ].join('-');

    const payload = {
        UserName: '',
        Password: '',
        SMSText: `OTP: ${message} Please use OTP`,
        SMSLang: 'E',
        SMSSender: '',
        SMSReceiver: phone,
        SMSID: smsId
    };

    try {
        const response = await axios.post('https://smsvas.vlserv.com/VLSMSPlatformResellerAPI/NewSendingAPI/api/SMSSender/SendSMSWithUserSMSIdAndValidity', payload);
        return response.data;
    } catch (error) {
        console.error('Error sending SMS via Viklink:', error);
        throw error;
    }
};

module.exports = {
    SMSMisr,
    OTPMisr,
    SMSViklink
};

