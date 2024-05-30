import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";

const subjects = [
  { id: "general", name: "General Knowledge" },
  { id: "math", name: "Math" },
  { id: "science", name: "Science" },
  { id: "history", name: "History" },
];

const topics = {
  general: ["Geography", "Literature", "Sports"],
  math: ["Algebra", "Geometry", "Calculus"],
  science: ["Physics", "Chemistry", "Biology"],
  history: ["Ancient", "Medieval", "Modern"],
};

const QuizIntro = ({ onStartQuiz }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);

  const handleStartQuiz = (e) => {
    e.preventDefault();
    const formData = {
      subject: selectedSubject,
      topic: selectedTopic,
      numQuestions,
    };
    onStartQuiz(formData);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <h2 className="text-center">Create Your Quiz</h2>
          <Form onSubmit={handleStartQuiz}>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                as="select"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                required
              >
                <option value="">Select a topic</option>
                {selectedSubject &&
                  topics[selectedSubject].map((topic, index) => (
                    <option key={index} value={topic}>
                      {topic}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of Questions</Form.Label>
              <Form.Control
                type="number"
                value={numQuestions}
                onChange={(e) =>
                  setNumQuestions(Math.min(40, Math.max(1, e.target.value)))
                }
                min="1"
                max="40"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3 w-100">
              Start Quiz
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizIntro;
