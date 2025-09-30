# LEO News Backend API

This is the backend API for the LEO News contact form functionality.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account for sending emails

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
PORT=3001
```

### Getting Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to "App passwords"
5. Generate a new app password for "Mail"
6. Copy the generated password and paste it in your `.env` file as `EMAIL_PASS`

### Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Send a contact form submission

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about your services",
  "message": "I would like to know more about..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error message"
}
```

### GET /api/health
Check if the server is running

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Email Configuration

All contact form submissions are sent to `joseph@bezohminds.com` as configured in the server code.

## Troubleshooting

If you encounter email sending issues:
1. Make sure 2-Step Verification is enabled on your Google Account
2. Use an App Password, not your regular Gmail password
3. Check that your Gmail account allows "Less secure app access" (if needed)
4. Verify that the EMAIL_USER and EMAIL_PASS are correctly set in .env

## Security Notes

- Never commit your `.env` file to version control
- Keep your app password secure
- Consider using environment variables for production deployment
