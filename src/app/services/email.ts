import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = environment.emailjs.serviceId;
  private templateId = environment.emailjs.templateId;
  private publicKey = environment.emailjs.publicKey;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  /**
   * Send contact form email via EmailJS
   * @param formData - The contact form data
   * @returns Promise with success status and message
   */
  async sendContactForm(formData: ContactFormData): Promise<EmailResponse> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiry: formData.inquiry,
        to_name: 'Adwat Team', // You can customize this
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey,
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email sent successfully!',
        };
      } else {
        return {
          success: false,
          message: 'Failed to send email. Please try again.',
        };
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'An error occurred. Please try again later.',
      };
    }
  }
}
