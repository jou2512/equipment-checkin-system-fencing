import { resend } from '@/app/api/[[...route]]/route';

// TODO: Put the Email logic in to the api route

export const sendSupportEmail = async (name: string, emailAddress: string, message: string) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: 'support@fencing-equipment-cs.com',
    subject: `Support Request from ${name}`,
    html:  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Support Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p>Dear Fencing Equipment Check System Support,</p>

            <p>${message}</p>

            <p>Thank you for your assistance.</p>

            <p>Best regards,<br>
            ${name}</p>

            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">

            <p style="font-size: 12px; color: #666;">
                This email was sent via the support form on the Fencing Equipment Check System website.
                Sender's email: ${emailAddress}
            </p>
        </body>
        </html>
        `,
  });
  console.log(data, error)
};

/**
 * Sends a confirmation email to a customer who has submitted a support request.
 * 
 * This function uses the Resend email service to send an HTML email to the customer,
 * confirming that their support request has been received and will be reviewed shortly.
 *
 * @param name - The name of the customer who submitted the support request.
 * @param emailAddress - The email address of the customer to which the confirmation will be sent.
 * @returns {Promise<void>} A promise that resolves when the email has been sent successfully.
 */
export const sendCustomerConfirmationEmail = async (name: string, emailAddress: string, message: string) => {
  await resend.emails.send({
    from: 'support@fencing-equipment-cs.com',
    to: emailAddress,
    subject: 'Support Request Received',
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Support Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p>Dear ${name},</p>

            <p>Thank you for contacting the Fencing Equipment Check System support team. We have received your request and will get back to you as soon as possible.</p>

            <p>Your message:</p>
            <blockquote style="margin: 0; padding: 10px 20px; border-left: 2px solid #0066cc; color: #666;">
                ${message}
            </blockquote>

            <p>Our support team typically responds within 24 hours. If you need immediate assistance, please call our support line at +41 (079) 305 33 85.</p>

            <p>We appreciate your patience and look forward to assisting you.</p>

            <p>Best regards,<br>
            Fencing Equipment Check System Support Team</p>

            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">

            <p style="font-size: 12px; color: #666;">
                Fencing Equipment Check System<br>
                Email: support@fencing-equipement-cs.com<br>
                Phone: +41 (079) 305 33 85<br>
                © 2025 Fencing Equipment Check System. All rights reserved.
            </p>
        </body>
        </html>
        `,
  });
};;

// Example usage:
// sendSupportEmail('John Doe', 'john.doe@example.com', 'I need help with my equipment check.');
