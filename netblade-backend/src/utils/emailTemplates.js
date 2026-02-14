// Email templates for password reset, welcome, etc.

export const passwordResetTemplate = (resetUrl, username) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Password Reset - Netblade</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #0d9488, #06b6d4); padding: 30px; text-align: center; color: white; }
        .content { background: #f9fafb; padding: 30px; }
        .button { display: inline-block; padding: 12px 30px; background: #0d9488; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Netblade</h1>
          <p>Password Reset Request</p>
        </div>
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>You requested to reset your password. Click the button below to create a new password:</p>
          <a href="${resetUrl}" class="button">Reset Password</a>
          <p>This link will expire in 10 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
        <div class="footer">
          <p>&copy; 2026 Netblade. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const welcomeEmailTemplate = (username) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Welcome to Netblade</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #0d9488, #06b6d4); padding: 30px; text-align: center; color: white; }
        .content { background: #f9fafb; padding: 30px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Netblade! 🚀</h1>
        </div>
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>Welcome to Netblade - Your journey to financial mastery starts here!</p>
          <p>Here's what you can do:</p>
          <ul>
            <li>📚 Access 20+ comprehensive trading courses</li>
            <li>📊 Get real-time market data and insights</li>
            <li>💬 Connect with fellow traders in our community</li>
            <li>🏆 Earn achievements and rewards</li>
          </ul>
          <p>Start learning today and become a better trader!</p>
        </div>
        <div class="footer">
          <p>&copy; 2026 Netblade. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default {
  passwordResetTemplate,
  welcomeEmailTemplate
};
