// Twilio configuration
module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID || 'YOUR_TWILIO_ACCOUNT_SID',
  authToken: process.env.TWILIO_AUTH_TOKEN || 'YOUR_TWILIO_AUTH_TOKEN',
  phoneNumber: process.env.TWILIO_PHONE_NUMBER || 'YOUR_TWILIO_PHONE_NUMBER'
};
