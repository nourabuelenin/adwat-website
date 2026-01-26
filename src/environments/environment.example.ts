// Environment configuration EXAMPLE
// Copy this file to environment.ts and environment.prod.ts and fill in your values
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID', // Get from EmailJS Dashboard > Email Services
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // Get from EmailJS Dashboard > Email Templates
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Get from EmailJS Dashboard > Account > Public Key
  },
};
