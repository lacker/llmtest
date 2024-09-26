import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [inputText, setInputText] = useState('');

  // Stub function for bot response
  function get_bot_response(userMessage) {
    // For now, just return a stubbed response
    return 'This is a stubbed response.';
  }

  // Handle sending a message
  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user's message to chat
    const userMessage = { sender: 'user', text: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Get bot's response
    const botReply = { sender: 'bot', text: get_bot_response(inputText) };
    setMessages((prevMessages) => [...prevMessages, botReply]);

    // Clear input field
    setInputText('');
  };

  // Handle pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.sender === 'user' ? styles.userMessage : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.inputField}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
}

// Simple inline styles for demonstration
const styles = {
  chatContainer: {
    width: '400px',
    margin: '50px auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
  },
  messagesContainer: {
    padding: '10px',
    height: '300px',
    overflowY: 'scroll',
    backgroundColor: '#f9f9f9',
  },
  userMessage: {
    textAlign: 'right',
    margin: '5px',
    padding: '8px',
    backgroundColor: '#dcf8c6',
    borderRadius: '10px',
    display: 'inline-block',
  },
  botMessage: {
    textAlign: 'left',
    margin: '5px',
    padding: '8px',
    backgroundColor: '#eaeaea',
    borderRadius: '10px',
    display: 'inline-block',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ccc',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    border: 'none',
    outline: 'none',
  },
  sendButton: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#5cb85c',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Chat;