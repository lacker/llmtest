import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [inputText, setInputText] = useState('');

  // Stub function for bot response
  async function get_bot_response(userMessage) {
    // Pause for 1 second to simulate bot response time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just return a stubbed response
    return 'This is a stubbed response.';
  }

  // Handle sending a message
  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    // Add user's message to chat
    const userMessage = { sender: 'user', text: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Get bot's response
    const text = await get_bot_response(inputText);
    const botReply = { sender: 'bot', text };
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
    <div className="w-1/2 mx-auto my-12 border border-gray-300 rounded-lg font-sans bg-white">
      <div className="h-96 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-1 p-2 rounded-lg inline-block ${
              msg.sender === 'user'
                ? 'bg-green-200 float-right clear-both'
                : 'bg-gray-300 float-left clear-both'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-300">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 p-2 outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;