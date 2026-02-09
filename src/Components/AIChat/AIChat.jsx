import React, { useState } from "react";
import "./AIChat.css";
import { FaTimes } from "react-icons/fa";

const AIChat = ({ isOpen, onClose, resumeUrl }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Parse and format response - highlight headings automatically
  const formatResponse = (text) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      // Detect headings (lines ending with : or starting with capital letters followed by :)
      if (trimmed.endsWith(":")) {
        return (
          <span key={idx} style={{ display: "block", fontWeight: "600", color: "#2dd4bf", marginTop: "8px" }}>
            {line}
          </span>
        );
      }
      return <span key={idx} style={{ display: "block" }}>{line}</span>;
    });
  };

  // Send a message (userText) to the server and stream the assistant response into the UI
  const sendMessage = async (userText) => {
    if (!userText || !userText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const aiId = Date.now() + 1;
    setMessages((prev) => [...prev, { id: aiId, text: "", sender: "ai", timestamp: new Date() }]);
    setLoading(true);

    try {
      const convo = messages
        .map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text }))
        .concat([{ role: "user", content: userText }]);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: convo, resumeUrl }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || "Server error");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        accumulated += chunk;
        setMessages((prev) => prev.map((m) => (m.id === aiId ? { ...m, text: accumulated } : m)));
      }
    } catch (err) {
      setMessages((prev) => prev.map((m) => (m.id === aiId ? { ...m, text: `Error: ${err.message}` } : m)));
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => sendMessage(input);

  const sendPreset = (type) => {
    let q = '';
    switch (type) {
      case 'summary':
        q = 'Please summarize the profile including experience, education, and key skills.';
        break;
      case 'contact':
        q = 'What are the contact details (email, phone, location) listed in the resume?';
        break;
      case 'experience':
        q = 'Describe the professional experience including roles, companies and durations.';
        break;
      case 'education':
        q = 'List the education details: degrees, institutions, and years.';
        break;
      default:
        q = type;
    }
    sendMessage(q);
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

        <div className="ai-chat-presets">
          <button className="preset-btn" onClick={() => sendPreset('summary')}>Summarize Profile</button>
          <button className="preset-btn" onClick={() => sendPreset('contact')}>Get Contact</button>
          <button className="preset-btn" onClick={() => sendPreset('experience')}>Experience</button>
          <button className="preset-btn" onClick={() => sendPreset('education')}>Education</button>
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
              <div style={{ whiteSpace: "pre-wrap" }}>
                {msg.sender === "ai" ? formatResponse(msg.text) : msg.text}
              </div>
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
