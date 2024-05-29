import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const subjectsTopicsData = {
  physics: [
    { id: "mechanics", name: "Механика. Кинематика. Динамика" },
    { id: "statics", name: "Статика" },
    { id: "conservation", name: "Законы сохранения" },
    { id: "waves", name: "Механические колебания и волны" },
    { id: "molecular", name: "Молекулярная физика" },
    { id: "thermodynamics", name: "Термодинамика" },
  ],
  math: [
    { id: "algebra", name: "Алгебра" },
    { id: "geometry", name: "Геометрия" },
    { id: "calculus", name: "Математический анализ" },
    { id: "trigonometry", name: "Тригонометрия" },
    { id: "statistics", name: "Статистика" },
  ],
  history: [
    { id: "ancient", name: "Древняя история" },
    { id: "medieval", name: "Средневековая история" },
    { id: "modern", name: "Новая история" },
    { id: "contemporary", name: "Новейшая история" },
  ],
  chemistry: [
    { id: "organic", name: "Органическая химия" },
    { id: "inorganic", name: "Неорганическая химия" },
    { id: "physical", name: "Физическая химия" },
    { id: "analytical", name: "Аналитическая химия" },
  ],
};

const subjectsContentsData = {
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
  algebra: [
    { name: "Линейные уравнения", isLocked: true },
    { name: "Квадратичные уравнения", isLocked: true },
  ],
  geometry: [
    { name: "Евклидова геометрия", isLocked: true },
    { name: "Неевклидова геометрия", isLocked: true },
  ],
  calculus: [
    { name: "Дифференцирование", isLocked: true },
    { name: "Интегрирование", isLocked: true },
  ],
  trigonometry: [
    { name: "Тригонометрические функции", isLocked: true },
    { name: "Тригонометрические уравнения", isLocked: true },
  ],
  statistics: [
    { name: "Дисперсия", isLocked: true },
    { name: "Среднеквадратичное отклонение", isLocked: true },
  ],
  ancient: [
    { name: "Древний Египет", isLocked: true },
    { name: "Месопотамия", isLocked: true },
  ],
  medieval: [
    { name: "Средневековая Европа", isLocked: true },
    { name: "Византия", isLocked: true },
  ],
  modern: [
    { name: "Эпоха Возрождения", isLocked: true },
    { name: "Просвещение", isLocked: true },
  ],
  contemporary: [
    { name: "Первая мировая война", isLocked: true },
    { name: "Вторая мировая война", isLocked: true },
  ],
  organic: [
    { name: "Углеводороды", isLocked: true },
    { name: "Алканы", isLocked: true },
  ],
  inorganic: [
    { name: "Металлы", isLocked: true },
    { name: "Неметаллы", isLocked: true },
  ],
  physical: [
    { name: "Термодинамика", isLocked: true },
    { name: "Кинетика", isLocked: true },
  ],
  analytical: [
    { name: "Качественный анализ", isLocked: true },
    { name: "Количественный анализ", isLocked: true },
  ],
};

const SubjectsDetail = () => {
  const { subjectId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("");

  const topicsData = subjectsTopicsData[subjectId] || [];
  const contentsData = subjectsContentsData;

  const handleTopicClick = (id) => {
    setSelectedTopic(id);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" className="attestation-btn">
            Аттестация по предмету {subjectId}
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
          {topicsData.map((topic) => (
            <div
              key={topic.id}
              className={`content-list ${selectedTopic === topic.id ? "" : "d-none"}`}
            >
              <ListGroup>
                {(contentsData[topic.id] || []).map((content, index) => (
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
