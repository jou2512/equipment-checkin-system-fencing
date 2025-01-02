import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);



export const sendSupportEmail = (name: string, emailAddress: string, message: string) => {
  resend.emails.send({
    from: 'support@fencing-equipment-cs.com',
    to: 'support@fencing-equipment-cs.com',
    subject: `Support Request from ${name}`,
    html: `
      <p>Dear Support Team,</p>
      <p>You have received a new support request from:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${emailAddress}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p>Please respond to the user at your earliest convenience.</p>
      <p>Best regards,</p>
      <p>The Fencing Equipment Check System Team</p>
    `,
  });
};

// Example usage:
// sendSupportEmail('John Doe', 'john.doe@example.com', 'I need help with my equipment check.');
