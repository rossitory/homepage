import { Resend } from 'resend';
import { H3Event, readBody } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const resend = new Resend(process.env.RESEND_API_KEY as string);

  try {
    // Read the form data from the request body
    const { name, email, message } = await readBody(event);

    // Construct the email content
    const htmlContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send the email using Resend API
    const data = await resend.emails.send({
      from: 'WebDev Ross <webdev-ross@resend.dev>',
      to: ['rossletterbox@gmail.com'],  // Change this to your recipient email
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error };
  }
});
