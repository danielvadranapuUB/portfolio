# Daniel Vadranapu - Portfolio with AI Assistant

A modern portfolio website featuring an AI-powered chatbot assistant that can answer questions about Daniel's experience, skills, projects, and contact information.

## Features

- **AI Assistant Chatbot**: Interactive chatbot powered by GPT-3.5-turbo
- **Professional Design**: Clean, modern UI with dark/light mode toggle
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Real-time Chat**: Instant responses with typing indicators
- **Contact Information**: Clickable links for email, LinkedIn, phone, and GitHub

## Tech Stack

### Frontend
- React.js
- CSS3 with animations
- Responsive design

### Backend
- Node.js
- Express.js
- OpenAI GPT-3.5-turbo API
- CORS enabled

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/danielvadranapuUB/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```
   This will start both the frontend (port 3000) and backend (port 3001)

## Deployment

### Frontend (GitHub Pages)
The frontend is automatically deployed to GitHub Pages at:
https://danielvadranapuUB.github.io/portfolio/

### Backend Deployment
The backend needs to be deployed to a platform that supports Node.js. Recommended platforms:

1. **Render** (Recommended - Free tier available)
2. **Railway** (Free tier available)
3. **Heroku** (Paid)

#### Deploy to Render:
1. Create account at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Set build command: `npm install`
5. Set start command: `npm run backend`
6. Add environment variable: `OPENAI_API_KEY`

## AI Assistant Features

The chatbot can answer questions about:
- **Experience**: Work history at iDrive, Nexquared, University at Buffalo, etc.
- **Skills**: Programming languages, frameworks, technologies
- **Projects**: Academic and professional projects
- **Contact Information**: Email, LinkedIn, phone, GitHub
- **Education**: Degrees and institutions

## Project Structure

```
portfolio/
├── src/
│   ├── ChatBot.js          # AI Assistant component
│   ├── App.js              # Main app component
│   └── index.css           # Styling with chat interface
├── server.js               # Backend API server
├── package.json            # Dependencies and scripts
└── .env                    # Environment variables (not in repo)
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for GPT integration
- `PORT`: Backend server port (default: 3001)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
