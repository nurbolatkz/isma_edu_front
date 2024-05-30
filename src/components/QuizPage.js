import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import QuizIntro from "./QuizIntro"; // Import the new QuizIntro component

// Dummy data for quiz questions (filtered later based on subject and topic)
const allQuizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    explanation: "The capital city of France is Paris.",
    image: "",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    subject: "general",
    topic: "Geography",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    explanation: "",
    image: "",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    subject: "math",
    topic: "Algebra",
  },
  {
    id: 3,
    question: "Which of the following is a prime number?",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    image: "",
    options: ["4", "6", "9", "11"],
    correctAnswer: "11",
    subject: "math",
    topic: "Algebra",
  },
  {
    id: 4,
    question: "Identify this famous landmark:",
    explanation: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Eiffel_Tower%2C_Paris_C14.jpg",
    options: ["Statue of Liberty", "Eiffel Tower", "Big Ben", "Colosseum"],
    correctAnswer: "Eiffel Tower",
    subject: "general",
    topic: "Geography",
  },
  // Add more questions as needed with appropriate subject and topic tags
];

const QuizPage = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0); // Time in seconds
  const [intervalId, setIntervalId] = useState(null); // To store the interval ID for the timer
  const [noQuestions, setNoQuestions] = useState(false); // To handle the case of no questions

  useEffect(() => {
    let interval = null;
    if (isQuizStarted && !isQuizFinished) {
      interval = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    } else if (isQuizFinished) {
      clearInterval(intervalId);
    }
    return () => clearInterval(interval);
  }, [isQuizStarted, isQuizFinished]);

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

  const startQuiz = ({ subject, topic, numQuestions }) => {
    const filteredQuizData = allQuizData
      .filter((q) => q.subject === subject && q.topic === topic)
      .slice(0, numQuestions);
    if (filteredQuizData.length === 0) {
      setNoQuestions(true);
      return;
    }
    setQuizData(filteredQuizData);
    setUserAnswers(Array(filteredQuizData.length).fill(null));
    setIsQuizStarted(true);
    setNoQuestions(false);
  };

  const finishQuiz = () => {
    setIsQuizFinished(true);
    clearInterval(intervalId); // Clear the interval when quiz is finished
  };

  const calculateCorrectAnswers = () => {
    return userAnswers.reduce((total, answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        return total + 1;
      }
      return total;
    }, 0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Container>
      {!isQuizStarted ? (
        <QuizIntro onStartQuiz={startQuiz} />
      ) : noQuestions ? (
        <Alert variant="warning" className="text-center mt-5">
          There are no questions with these parameters. Please change the
          parameters.
        </Alert>
      ) : !isQuizFinished ? (
        <>
          <Row className="mb-4">
            <Col>
              <h2>Quiz</h2>
              <p>Time spent: {formatTime(timeSpent)}</p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <ListGroup horizontal className="justify-content-center">
                {quizData.map((question, index) => (
                  <ListGroup.Item
                    key={question.id}
                    active={index === currentQuestionIndex}
                    onClick={() => setCurrentQuestionIndex(index)}
                    style={{ cursor: "pointer", margin: "0 5px" }} // Add margin between question numbers
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
                <Image
                  src={currentQuestion.image}
                  alt="Question illustration"
                  fluid
                  className="mb-3"
                />
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
          <Row className="mt-4 justify-content-center">
            <Col xs="auto">
              <Button
                variant="primary"
                onClick={handlePrevClick}
                disabled={currentQuestionIndex === 0}
                className="mx-2" // Add margin between buttons
              >
                Previous
              </Button>
              {currentQuestionIndex === quizData.length - 1 ? (
                <Button
                  variant="success"
                  onClick={finishQuiz}
                  className="mx-2" // Add margin between buttons
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleNextClick}
                  className="mx-2" // Add margin between buttons
                >
                  Next
                </Button>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Container className="mt-5">
          <Row>
            <Col className="text-center">
              <h2>Quiz Results</h2>
              <p>
                You got {calculateCorrectAnswers()} out of {quizData.length}{" "}
                correct.
              </p>
              <p>Total time spent: {formatTime(timeSpent)}</p>
              <ListGroup>
                {quizData.map((question, index) => (
                  <ListGroup.Item key={question.id}>
                    <h5>{question.question}</h5>
                    {question.image && (
                      <Image
                        src={question.image}
                        alt="Question illustration"
                        fluid
                        className="mb-3"
                      />
                    )}
                    <p>Your answer: {userAnswers[index]}</p>
                    <p>Correct answer: {question.correctAnswer}</p>
                    <p>{question.explanation}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default QuizPage;
