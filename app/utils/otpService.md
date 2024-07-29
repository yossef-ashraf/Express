
```javascript
// app.js

const express = require('express');
const { SMSMisr, OTPMisr, SMSViklink } = require('./utils/otpService');

const app = express();
app.use(express.json());

app.post('/send-sms-misr', async (req, res) => {
    const { phone, message } = req.body;
    try {
        const response = await SMSMisr(phone, message);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error sending SMS via SMSMisr' });
    }
});

app.post('/send-otp-misr', async (req, res) => {
    const { phone, message } = req.body;
    try {
        const response = await OTPMisr(phone, message);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error sending OTP via OTPMisr' });
    }
});

app.post('/send-sms-viklink', async (req, res) => {
    const { phone, message } = req.body;
    try {
        const response = await SMSViklink(phone, message);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error sending SMS via Viklink' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

