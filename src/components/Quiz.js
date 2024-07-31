// src/components/Quiz.js

import React, { useState } from 'react';

const questions = [
  {
    question: "What is phishing?",
    options: [
      "A type of fish",
      "A cybersecurity attack that tricks users into revealing sensitive information",
      "A method of encrypting data",
      "A secure way of sending emails"
    ],
    correctAnswer: 1
  },
  {
    question: "What does HTTPS stand for?",
    options: [
      "Hypertext Transfer Protocol Secure",
      "High Transfer Protocol Secure",
      "Hypertext Transfer Protocol Standard",
      "High Transfer Protocol Standard"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a firewall used for?",
    options: [
      "To cook food",
      "To protect networks from unauthorized access",
      "To encrypt data",
      "To monitor network speed"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a common password hashing algorithm?",
    options: [
      "MD5",
      "RSA",
      "AES",
      "SHA-256"
    ],
    correctAnswer: 3
  },
  {
    question: "What is a VPN?",
    options: [
      "Virtual Private Network",
      "Variable Public Network",
      "Virtual Public Network",
      "Variable Private Network"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of two-factor authentication?",
    options: [
      "To double the password strength",
      "To provide an extra layer of security",
      "To increase network speed",
      "To encrypt data"
    ],
    correctAnswer: 1
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Standard Query Language",
      "Simple Query Language",
      "System Query Language"
    ],
    correctAnswer: 0
  },
  {
    question: "What is malware?",
    options: [
      "Software designed to protect your computer",
      "Software designed to harm your computer",
      "A type of hardware",
      "An operating system"
    ],
    correctAnswer: 1
  },
  {
    question: "What is social engineering?",
    options: [
      "A method of improving social skills",
      "A cybersecurity attack that manipulates people",
      "A form of data encryption",
      "A network configuration technique"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a DDoS attack?",
    options: [
      "A Distributed Denial of Service attack",
      "A Distributed Data of Service attack",
      "A Direct Denial of Service attack",
      "A Data Denial of Service attack"
    ],
    correctAnswer: 0
  },
  {
    question: "What is encryption?",
    options: [
      "A method of converting information into code",
      "A process of data compression",
      "A technique for improving network speed",
      "A type of firewall configuration"
    ],
    correctAnswer: 0
  },
  {
    question: "What does a phishing email typically attempt to do?",
    options: [
      "Provide a discount",
      "Trick the recipient into revealing personal information",
      "Offer a job opportunity",
      "Ask for a donation"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a brute-force attack?",
    options: [
      "An attack using sophisticated software tools",
      "An attack that tries all possible passwords",
      "An attack that uses social engineering techniques",
      "An attack that exploits software vulnerabilities"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a zero-day exploit?",
    options: [
      "An exploit that occurs on the day a vulnerability is discovered",
      "An exploit that occurs after a vulnerability has been patched",
      "An exploit that uses encryption techniques",
      "An exploit that is part of regular system maintenance"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the main purpose of an IDS?",
    options: [
      "To prevent unauthorized access",
      "To detect and alert on suspicious activity",
      "To encrypt sensitive data",
      "To improve network performance"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a digital certificate?",
    options: [
      "A document verifying the identity of a user or device",
      "A form of encryption",
      "A type of malware",
      "A method for securing passwords"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a network packet?",
    options: [
      "A small unit of data transmitted over a network",
      "A type of malware",
      "A hardware component",
      "A software application"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the acronym VPN stand for?",
    options: [
      "Virtual Private Network",
      "Variable Public Network",
      "Virtual Public Network",
      "Variable Private Network"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of a DMZ in networking?",
    options: [
      "To create a secure area between the internal network and the internet",
      "To monitor network traffic",
      "To store backup data",
      "To encrypt data"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a software update?",
    options: [
      "A modification to improve functionality or fix issues",
      "A type of data encryption",
      "A new version of hardware",
      "A type of malware"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a security patch?",
    options: [
      "A fix for a security vulnerability in software",
      "A method for encrypting data",
      "A new hardware component",
      "A type of malware"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an IP address?",
    options: [
      "A unique identifier for a device on a network",
      "A type of encryption",
      "A type of malware",
      "A network protocol"
    ],
    correctAnswer: 0
  },
  {
    question: "What does HTTPS ensure?",
    options: [
      "Data encryption between the client and server",
      "Faster data transfer",
      "Improved network speed",
      "Data storage"
    ],
    correctAnswer: 0
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)}>{option}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
