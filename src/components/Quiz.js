// src/components/Quiz.js
import React, { useState } from 'react';

// 20 sample questions
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
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol Service",
      "HyperText Transport Protocol Security",
      "HyperText Transaction Protocol Secure"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a firewall?",
    options: [
      "A physical wall to block fire",
      "A network security system that monitors and controls incoming and outgoing traffic",
      "A type of virus",
      "A method to speed up a network"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a VPN used for?",
    options: [
      "To access the internet securely and privately",
      "To improve network speed",
      "To store data securely",
      "To scan for malware"
    ],
    correctAnswer: 0
  },
  {
    question: "What is two-factor authentication?",
    options: [
      "A method to increase login security by requiring two forms of verification",
      "A tool to encrypt data",
      "A technique to improve network speed",
      "A type of malware"
    ],
    correctAnswer: 0
  },
  {
    question: "What is malware?",
    options: [
      "Software designed to harm or exploit any device or network",
      "A tool to protect against viruses",
      "A type of secure communication",
      "A method to enhance network performance"
    ],
    correctAnswer: 0
  },
  {
    question: "What is social engineering in cybersecurity?",
    options: [
      "Manipulating individuals into divulging confidential information",
      "A technique to enhance network security",
      "A method to increase data storage",
      "A type of encryption"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a DDoS attack?",
    options: [
      "A distributed denial-of-service attack aimed at making a network resource unavailable",
      "A type of virus",
      "A method to improve network speed",
      "A technique for data encryption"
    ],
    correctAnswer: 0
  },
  {
    question: "What is ransomware?",
    options: [
      "Malware that encrypts a victim's data and demands payment for the decryption key",
      "A tool to improve network speed",
      "A method to store data securely",
      "A type of network firewall"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an IP address?",
    options: [
      "A unique string of numbers separated by periods that identifies each computer using the Internet Protocol",
      "A method for secure communication",
      "A type of virus",
      "A firewall feature"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the term 'phishing' refer to?",
    options: [
      "A method of attempting to acquire sensitive information by disguising as a trustworthy entity",
      "A technique to enhance data encryption",
      "A tool to improve network speed",
      "A type of network firewall"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a secure password?",
    options: [
      "A password that is difficult to guess and includes a mix of letters, numbers, and symbols",
      "A common word or phrase",
      "A password with only letters",
      "A simple numeric password"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of an antivirus program?",
    options: [
      "To detect and remove malware from a computer",
      "To enhance network speed",
      "To encrypt data",
      "To manage user passwords"
    ],
    correctAnswer: 0
  },
  {
    question: "What does SSL stand for?",
    options: [
      "Secure Sockets Layer",
      "Simple Security Layer",
      "Secure System Layer",
      "Socket Security Layer"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a phishing scam?",
    options: [
      "An attempt to obtain sensitive information by disguising as a trustworthy entity",
      "A type of network speed enhancement",
      "A method for secure data storage",
      "A type of firewall"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a secure network?",
    options: [
      "A network protected by security measures to prevent unauthorized access",
      "A network with high speed",
      "A type of antivirus program",
      "A method for encrypting data"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an encryption key?",
    options: [
      "A piece of information used to encrypt and decrypt data",
      "A type of malware",
      "A network speed enhancement tool",
      "A method to store passwords"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a brute-force attack?",
    options: [
      "A method of guessing passwords by trying all possible combinations",
      "A technique to enhance network performance",
      "A type of encryption algorithm",
      "A method to detect malware"
    ],
    correctAnswer: 0
  },
  {
    question: "What is an exploit?",
    options: [
      "A piece of code that takes advantage of a vulnerability in software",
      "A type of network speed enhancement",
      "A method to secure data",
      "A tool to manage passwords"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a cybersecurity breach?",
    options: [
      "An incident where unauthorized access is gained to a system",
      "A type of malware",
      "A method for data encryption",
      "A tool to improve network speed"
    ],
    correctAnswer: 0
  },
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "A security flaw that is exploited before it is known to the software vendor",
      "A type of encryption key",
      "A network speed enhancement tool",
      "A method to store passwords securely"
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

  const handleRetryClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleRetryClick} className="retry-button">Retry</button>
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
