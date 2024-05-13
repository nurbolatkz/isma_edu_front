import React from 'react';

function CourseDetails() {
  return (
    <div className="course-info">
      <div className="course-description">
        <div className="course-header">
          <p className="course-title">Курс по ПДД</p>
          <p className="course-subtitle">Изучите все ПДД по нашему авторскому 3D курсу</p>
        </div>
        <a className="buy-button" tabIndex="0" href="/payment">Купить</a>
      </div>
      <div className="lesson-info">
        <p className="lesson-label">Последний урок:</p>
          <div className="lesson-content">
            <div className="lesson-icon"></div>
            <div className="lesson-details">
                <a className='lesson-link' href=''>
                     <h5 className="lesson-title">#1. Введение</h5>
                </a>
             
              <p className="lesson-status">Урок пройден</p>
            </div>
            <div className="lesson-progress">1/1</div>
          </div>
          
     
      </div>
      <div className="lesson-info">
        <p className="lesson-label">Следующий урок:</p>
        
          <div className="lesson-content">
            <div className="lesson-icon"></div>
            <div className="lesson-details">

            <a className='lesson-link' href=''>
                     <h5 className="lesson-title">#2.1. Общие обязанности водителей</h5>
            </a>
             
              <p className="lesson-status">Урок не пройден</p>
            </div>
            <div className="lesson-progress">0/1</div>
          </div>
       
      
      </div>
      <a className="course-link" tabIndex="0" href="/courses/1">Перейти к курсу</a>
    </div>
  );
}

export default CourseDetails;
