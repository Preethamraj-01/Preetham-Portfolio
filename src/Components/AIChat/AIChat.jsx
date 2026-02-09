import React, { useState } from "react";
import "./AIChat.css";
import { FaTimes } from "react-icons/fa";

const AIChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response (will be replaced with actual API call)
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        text: "Thanks for your question! I'm learning to answer questions about this portfolio. Check back soon for AI-powered responses!",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-box">
        <div className="ai-chat-header">
          <h3>Ask me anything! 🤖</h3>
          <button onClick={onClose} className="close-btn">
            <FaTimes />
          </button>
        </div>

        <div className="ai-chat-messages">
          {messages.length === 0 && (
            <div className="ai-welcome-message">
              <p>Hi! 👋 Ask me anything about my projects, skills, or experience!</p>
            </div>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`ai-message ${msg.sender === "user" ? "user-msg" : "ai-msg"}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && (
            <div className="ai-message ai-msg">
              <p className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </p>
            </div>
          )}
        </div>

        <div className="ai-chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me something..."
            className="ai-chat-input"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            className="ai-send-btn"
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
