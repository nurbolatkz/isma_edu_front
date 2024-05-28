import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const topicsData = [
  { id: "mechanics", name: "Механика. Кинематика. Динамика" },
  { id: "statics", name: "Статика" },
  { id: "conservation", name: "Законы сохранения" },
  { id: "waves", name: "Механические колебания и волны" },
  { id: "molecular", name: "Молекулярная физика" },
  { id: "thermodynamics", name: "Термодинамика" },
];

const contentsData = {
  mechanics: [
    { name: "Силы", isLocked: true },
    { name: "Основные понятия кинематики", isLocked: true },
    { name: "Равномерное прямолинейное движение", isLocked: true },
    { name: "Относительность движения", isLocked: true },
    { name: "Равноускоренное прямолинейное движение", isLocked: true },
    {
      name: "Движение тела, брошенного вертикально вверх и вниз",
      isLocked: true,
    },
  ],
  statics: [
    { name: "Статическое равновесие", isLocked: true },
    { name: "Прочность материалов", isLocked: true },
  ],
  conservation: [
    { name: "Закон сохранения энергии", isLocked: true },
    { name: "Закон сохранения импульса", isLocked: true },
  ],
  waves: [
    { name: "Гармонические колебания", isLocked: true },
    { name: "Волновые явления", isLocked: true },
  ],
  molecular: [
    { name: "Кинетическая теория", isLocked: true },
    { name: "Свойства газов", isLocked: true },
  ],
  thermodynamics: [
    { name: "Первые начала термодинамики", isLocked: true },
    { name: "Энтропия", isLocked: true },
  ],
};

const SubjectsDetail = () => {
  const [selectedTopic, setSelectedTopic] = useState("mechanics");

  const handleTopicClick = (id) => {
    setSelectedTopic(id);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" className="attestation-btn">
            Аттестация по предмету
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <ListGroup>
            {topicsData.map((topic) => (
              <ListGroup.Item
                key={topic.id}
                action
                active={selectedTopic === topic.id}
                onClick={() => handleTopicClick(topic.id)}
              >
                {topic.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          {Object.keys(contentsData).map((topicId) => (
            <div
              key={topicId}
              className={`content-list ${selectedTopic === topicId ? "" : "d-none"}`}
            >
              <ListGroup>
                {contentsData[topicId].map((content, index) => (
                  <ListGroup.Item key={index}>
                    <Row className="align-items-center">
                      <Col>{content.name}</Col>
                      <Col className="text-right">
                        <Button
                          variant="secondary"
                          className="mr-2 concept-btn"
                        >
                          Конспект
                        </Button>
                        <Button
                          variant={content.isLocked ? "danger" : "success"}
                          className="lock-btn"
                        >
                          {content.isLocked ? "🔒" : "🔓"}
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SubjectsDetail;
