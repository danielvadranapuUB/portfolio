import React, { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Daniel's AI assistant. Ask me anything about his experience, projects, or skills!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      console.log('Attempting to connect to server...');
      
      // Safari-specific headers and options
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      // Check if we're on localhost (local development) or deployed
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      let response;
      let success = false;
      
      if (isLocalhost) {
        // Local development - direct connection
        console.log('Using direct connection for localhost');
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ message: inputMessage }),
          signal: AbortSignal.timeout(15000)
        };
        
        response = await fetch('http://16.16.31.170:3001/api/chat', fetchOptions);
        success = response.ok;
      } else {
        // Deployed version - use HTTPS domain
        console.log('Using HTTPS domain for deployed version');
        
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(isSafari && {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            })
          },
          body: JSON.stringify({ message: inputMessage }),
          signal: AbortSignal.timeout(15000)
        };
        
        response = await fetch('https://api.danielvadranapu.com/api/chat', fetchOptions);
        success = response.ok;
      }

      if (!success) {
        throw new Error('All connection attempts failed');
      }

      console.log('Response received:', response.status);
      const data = await response.json();
      console.log('Data received:', data);
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = "Sorry, I'm having trouble connecting to the server. Please try again.";
      
      if (error.name === 'AbortError') {
        errorMessage = "Request timed out. Please check your connection and try again.";
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = "Cannot connect to server. Please check your internet connection.";
      } else if (error.message.includes('NetworkError')) {
        errorMessage = "Network error. This might be a browser compatibility issue.";
      } else if (error.message.includes('All connection attempts failed')) {
        errorMessage = "All connection methods failed. The server might be down or there's a network issue.";
      }
      
      const errorBotMessage = {
        id: Date.now() + 1,
        text: errorMessage,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Add touch event handling for mobile
  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className="chat-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="chat-icon">
          {isOpen ? "×" : "💬"}
        </div>
        <div className="chat-pulse"></div>
        <div className="notification-dot"></div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chat-window ${isMaximized ? 'maximized' : ''}`}>
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <div className="chat-controls">
              <button 
                className="maximize-btn"
                onClick={() => setIsMaximized(!isMaximized)}
                title={isMaximized ? "Minimize" : "Maximize"}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {isMaximized ? "🗗" : "⛶"}
              </button>
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                <div className="message-content">
                  {message.sender === "bot" ? (
                    <div dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    message.text
                  )}
                </div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Daniel's experience, projects, or skills..."
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="send-btn"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 