# Portfolio Website with AI Chatbot

A modern portfolio website featuring an interactive AI chatbot powered by OpenAI GPT-3.5-turbo.

## Features

- **Interactive AI Chatbot**: Powered by OpenAI GPT-3.5-turbo
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface
- **Real-time Chat**: Instant responses from the AI assistant
- **Portfolio Information**: Detailed information about projects, skills, and experience

## Tech Stack

- **Frontend**: React.js, CSS3
- **Backend**: Node.js, Express.js
- **AI**: OpenAI GPT-3.5-turbo API
- **Deployment**: GitHub Pages (Frontend), AWS EC2 (Backend)

## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/danielvadranapuUB/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. In a separate terminal, start the backend server:
   ```bash
   node server.js
   ```

The application will be available at `http://localhost:3000`

## Deployment

### Frontend Deployment (GitHub Pages)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The site will be available at `https://danielvadranapuUB.github.io`

### Backend Deployment (AWS EC2)

1. **Launch an EC2 instance**:
   - Choose Ubuntu Server 20.04 LTS
   - Configure security group to allow port 3001
   - Download your `.pem` key file

2. **Connect to your instance**:
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone and setup the repository**:
   ```bash
   git clone https://github.com/danielvadranapuUB/portfolio.git
   cd portfolio
   npm install
   ```

5. **Create `.env` file**:
   ```bash
   nano .env
   ```
   Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

6. **Install PM2** (process manager):
   ```bash
   sudo npm install -g pm2
   ```

7. **Start the server with PM2**:
   ```bash
   pm2 start server.js --name "portfolio-backend"
   pm2 startup
   pm2 save
   ```

8. **Update the frontend** to point to your AWS IP:
   - Edit `src/ChatBot.js`
   - Change the fetch URL to: `http://your-aws-ip:3001/api/chat`
   - Deploy the updated frontend

### Alternative Backend Deployment Options

#### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm run build:backend`
4. Set start command: `npm run backend`
5. Add environment variable: `OPENAI_API_KEY`

#### Railway
1. Connect your GitHub repository
2. Set the root directory to the project folder
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy automatically

#### Heroku
1. Install Heroku CLI
2. Create a new app: `heroku create your-app-name`
3. Set environment variable: `heroku config:set OPENAI_API_KEY=your_key`
4. Deploy: `git push heroku master`

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── ChatBot.js          # Main chatbot component
│   ├── App.js              # Main app component
│   └── index.css           # Styles
├── server.js               # Backend server
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

---

*Last updated: July 2024*
# Updated Mon Jul 28 15:39:14 PDT 2025
