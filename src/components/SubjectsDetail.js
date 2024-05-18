import React, { useState } from 'react';


const topicsData = [
    { id: 'mechanics', name: 'Механика. Кинематика. Динамика' },
    { id: 'statics', name: 'Статика' },
    { id: 'conservation', name: 'Законы сохранения' },
    { id: 'waves', name: 'Механические колебания и волны' },
    { id: 'molecular', name: 'Молекулярная физика' },
    { id: 'thermodynamics', name: 'Термодинамика' }
];

const contentsData = {
    mechanics: [
        { name: 'Силы', isLocked: true },
        { name: 'Основные понятия кинематики', isLocked: true },
        { name: 'Равномерное прямолинейное движение', isLocked: true },
        { name: 'Относительность движения', isLocked: true },
        { name: 'Равноускоренное прямолинейное движение', isLocked: true },
        { name: 'Движение тела, брошенного вертикально вверх и вниз', isLocked: true }
    ],
    statics: [
        { name: 'Статическое равновесие', isLocked: true },
        { name: 'Прочность материалов', isLocked: true }
    ],
    conservation: [
        { name: 'Закон сохранения энергии', isLocked: true },
        { name: 'Закон сохранения импульса', isLocked: true }
    ],
    waves: [
        { name: 'Гармонические колебания', isLocked: true },
        { name: 'Волновые явления', isLocked: true }
    ],
    molecular: [
        { name: 'Кинетическая теория', isLocked: true },
        { name: 'Свойства газов', isLocked: true }
    ],
    thermodynamics: [
        { name: 'Первые начала термодинамики', isLocked: true },
        { name: 'Энтропия', isLocked: true }
    ]
};

const SubjectsDetail = () => {
    const [selectedTopic, setSelectedTopic] = useState('mechanics');

    const handleTopicClick = (id) => {
        setSelectedTopic(id);
    };

    return (
        <div className="container">
            <button className="attestation-btn">Аттестация по предмету</button>
            <div className="topics">
                {topicsData.map(topic => (
                    <div
                        key={topic.id}
                        className={`topic ${selectedTopic === topic.id ? 'selected' : ''}`}
                        onClick={() => handleTopicClick(topic.id)}
                    >
                        {topic.name}
                    </div>
                ))}
            </div>
            {Object.keys(contentsData).map(topicId => (
                <ul key={topicId} className={`content-list ${selectedTopic === topicId ? '' : 'hidden'}`} id={topicId}>
                    {contentsData[topicId].map((content, index) => (
                        <li key={index}>
                            <span>{content.name}</span>
                            <button className="concept-btn">Конспект</button>
                            <button className="lock-btn">{content.isLocked ? '🔒' : '🔓'}</button>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default SubjectsDetail;
