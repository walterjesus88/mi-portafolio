import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams(); // Asegúrate de que estás obteniendo el ID

  const projects = {
    1: {
      title: "Project X",
      description: "Detailed description of Project X...",
      images: [
        require('../assets/images/project-x.png'),
        require('../assets/images/portfolio-2.jpg'),
        require('../assets/images/portfolio-3.png')
      ]
    },
    // Puedes agregar más proyectos aquí
  };

  const project = projects[id];

  // Verificar si el proyecto existe
  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${project.title} ${index + 1}`}
          style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
}

export default ProjectDetail;
