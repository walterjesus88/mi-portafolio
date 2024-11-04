// src/Timeline.js
import React from 'react';
import '../Timeline.css';

// const Timeline = ({ events }) => {
//   return (
//     <div className="timeline">
//       {events.map((event, index) => (
//         <div className="timeline-event" key={index}>
//           <div className="timeline-date">{event.date}</div>
//           <div className="timeline-content">
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import projectXImage from '../assets/images/project-x.png';
import milestoneImage from '../assets/images/milestone.png';
import reactLearningImage from '../assets/images/portfolio-1.jpg';
import projectYImage from '../assets/images/portfolio-3.png';
import { Link } from 'react-router-dom';


function Timeline() {
  const timelineEvents = [
    {
      date: "Octubre 2024",
      title: "Dashboard Envio mails",
      description: "Este proyecto nos muestran insights sobre los envios que se hacen a la cuenta movistar tv.",
      image: projectXImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      date: "Enero 2024",
      title: "Dashboard Profuturo ",
      description: "Es un dashboard hecho en powerBI donde analiza indicadores de la cuenta Profuturo de facebook. Se uso api graph facebook con python y sql",
      image: milestoneImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    },
    {
      date: "2018",
      title: "Sistema de condominios ",
      description: "Este sistema se creo para la administracion de condominios. Hecho en laravel, vuejs  y postgresql",
      image: reactLearningImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
    },
    {
      date: "2017",
      title: "Sistema de donaciones Embajada de Italia",
      description: "Este sistema se hizo para el area del ministerio de salud - cooperacion internacional.",
      image: projectYImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(0, 150, 136)', color: '#fff' },
    },
    {
      date: "2016",
      title: "Sistema de riesgos - milpo ",
      description: "Este sistema se prevencion de riesgos de la empresa minera Milpo",
      image: projectYImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(0, 150, 136)', color: '#fff' },
    },
    {
      date: "2015",
      title: "Sistema Academico EUNDAC",
      description: "Este sistema se hizo para la universidad Nacional Daniel Alcides carrion.",
      image: projectYImage,
      link: "/project/1",
      iconStyle: { background: 'rgb(0, 150, 136)', color: '#fff' },
    },
  ];

  return (
    <VerticalTimeline>
      {timelineEvents.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={event.iconStyle}
        >
          <div className="timeline-content">
            <div className="timeline-description">
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <p>{event.description}</p>
              <Link to={event.link} className="link-button">Ver más</Link>
            </div>
            <Link to={event.link} className="timeline-image">
              <img
                src={event.image}
                alt={event.title}
                style={{ width: '100%', borderRadius: '8px', marginTop: '10px', cursor: 'pointer' }}
              />
            </Link>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
