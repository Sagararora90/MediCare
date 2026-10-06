import React, { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatbotWidget = () => {
  const { backendUrl } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${backendUrl}/api/chatbot`, {
        messages: newMessages,
      });

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong. Try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={toggleChatbot}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition"
        aria-label="Toggle chatbot"
      >
        💬
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div className="w-[450px] h-[700px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col mt-2">
          <h2 className="text-lg font-bold mb-2">AI Doctor</h2>
          <div
            className="flex-1 overflow-y-auto overflow-x-hidden mb-2 bg-gray-100 p-2 rounded break-words"
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded max-w-[95%] ${
                    msg.role === "user" ? "bg-blue-200" : "bg-white border border-gray-200 shadow-sm"
                  }`}
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none text-left">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <span>{msg.content}</span>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <span className="inline-block px-3 py-2 rounded bg-white border border-gray-200 shadow-sm text-gray-500">
                  Typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex">
            <input
              type="text"
              className="flex-grow border p-2 rounded-l break-words focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
