import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";  // Import the CSS file

const subjects = [
  {
    id: "physics",
    title: "Physics",
    image:
      "https://images.squarespace-cdn.com/content/v1/60741d90b2d5d468bcc0c5a6/1687865007790-ZGTKRM7BB4L32D894ZTJ/DP+-+Physics.png",
  },
  {
    id: "math",
    title: "Math",
    image:
      "https://images.squarespace-cdn.com/content/v1/60741d90b2d5d468bcc0c5a6/1687865007790-ZGTKRM7BB4L32D894ZTJ/DP+-+Physics.png",
  },
  {
    id: "history",
    title: "History",
    image:
      "https://images.squarespace-cdn.com/content/v1/60741d90b2d5d468bcc0c5a6/1687865007790-ZGTKRM7BB4L32D894ZTJ/DP+-+Physics.png",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    image:
      "https://images.squarespace-cdn.com/content/v1/60741d90b2d5d468bcc0c5a6/1687865007790-ZGTKRM7BB4L32D894ZTJ/DP+-+Physics.png",
  },
];

const SubjectList = () => {
  const navigate = useNavigate();

  const handleCardClick = (subjectId) => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <Container>
      <div className="intro_title">Негізгі пәндер</div>
      <Row>
        {subjects.map((subject) => (
          <Col key={subject.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card
              onClick={() => handleCardClick(subject.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={subject.image} alt={subject.title} />
              <Card.Body>
                <Card.Title>{subject.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubjectList;
