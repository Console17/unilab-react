import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const chat = () => {
  const location = useLocation();
  const { dog } = location.state || {};

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category");
  };

  const sentences = [
    "Hello! How can I assist you today?",
    "What's on your mind?",
    "How do you feel today?",
    "Is there anything you'd like to know?",
    "Let's talk about something interesting!",
  ];

  const predefinedResponses = {
    "What is WappGPT":
      "WappGPT is an AI-powered chatbot that can help with various tasks, including answering questions, providing information, and more.",
    Pricing:
      "The pricing for WappGPT depends on the plan you choose. Basic plans start at $10 per month, while premium plans with advanced features go up to $30 per month.",
    FAQs: "You can visit our FAQ section to find answers to the most common questions or ask me anything here!",
  };

  const { userName } = useContext(UserContext);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (userName) {
      const savedChatHistory = localStorage.getItem(`${userName}-chat`);
      if (savedChatHistory) {
        setChatHistory(JSON.parse(savedChatHistory));
      } else {
        const firstSentence = generateRandomSentence();
        setChatHistory([{ sender: "ai", message: firstSentence }]);
      }
    }
  }, [userName]);

  useEffect(() => {
    if (userName && chatHistory.length > 0) {
      localStorage.setItem(`${userName}-chat`, JSON.stringify(chatHistory));
    }
  }, [chatHistory, userName]);

  const generateRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };
  const handleUserInput = (event) => {
    event.preventDefault();

    if (userInput.trim()) {
      const newAISentence = generateRandomSentence();
      const updatedChatHistory = [
        ...chatHistory,
        { sender: "user", message: userInput },
        { sender: "ai", message: newAISentence },
      ];

      setChatHistory(updatedChatHistory);
      setUserInput("");
    }
  };

  const handlePredefinedResponse = (question) => {
    const aiResponse = predefinedResponses[question];

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", message: question },
      { sender: "ai", message: aiResponse },
    ]);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="details-header">
          <Header />
        </div>
        <div className="dog-chat">
          <div className="dog-chat-img">
            <img
              src="../../../public/details-page/arrow-left-details.svg"
              className="chat-arrow-left-img"
              onClick={handleNavigate}
            />
            <img src={dog.img} alt="" className="chat-dog-img" />
          </div>
          <div className="chat-div">
            <div className="chat-history">
              {chatHistory.map((entry, index) => (
                <p
                  key={index}
                  className={
                    entry.sender === "user" ? "user-message" : "ai-message"
                  }
                >
                  {entry.message}
                </p>
              ))}
            </div>

            <form onSubmit={handleUserInput}>
              <div className="other-values">
                <button
                  type="button"
                  onClick={() => handlePredefinedResponse("What is WappGPT")}
                >
                  🤔 What is WappGPT?
                </button>
                <button
                  onClick={() => handlePredefinedResponse("Pricing")}
                  type="button"
                >
                  💰 Pricing
                </button>
                <button
                  type="button"
                  onClick={() => handlePredefinedResponse("FAQs")}
                >
                  🙋‍♂️ FAQs
                </button>
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="user-input"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default chat;
