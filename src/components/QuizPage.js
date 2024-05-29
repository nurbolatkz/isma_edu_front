import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";  // Import the CSS file for custom styling

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    explanation: "The capital city of France is Paris.",
    image: "",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    explanation: "",
    image: "",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 3,
    question: "Which of the following is a prime number?",
    explanation: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    image: "",
    options: ["4", "6", "9", "11"],
    correctAnswer: "11",
  },
  {
    id: 4,
    question: "Identify this famous landmark:",
    explanation: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Eiffel_Tower%2C_Paris_C14.jpg",
    options: ["Statue of Liberty", "Eiffel Tower", "Big Ben", "Colosseum"],
    correctAnswer: "Eiffel Tower",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));

  const handleAnswerClick = (answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Quiz</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ListGroup horizontal>
            {quizData.map((question, index) => (
              <ListGroup.Item
                key={question.id}
                active={index === currentQuestionIndex}
                onClick={() => setCurrentQuestionIndex(index)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>{currentQuestion.question}</h4>
          {currentQuestion.image && (
            <Image src={currentQuestion.image} alt="Question illustration" fluid className="mb-3" />
          )}
          <p>{currentQuestion.explanation}</p>
          <ListGroup>
            {currentQuestion.options.map((option, index) => (
              <ListGroup.Item
                key={index}
                action
                active={userAnswers[currentQuestionIndex] === option}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button
            variant="primary"
            onClick={handlePrevClick}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={handleNextClick}
            disabled={currentQuestionIndex === quizData.length - 1}
            className="ml-2"
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
