import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      name: 'Skyline Residency',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Urban Heights',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Luxury Villas',
      image: 'https://th.bing.com/th/id/OIP.HCDcI55XeZ2tExxPJpCTnAHaEK?rs=1&pid=ImgDetMain&cb=idpwebpc2'
    },
    {
      name: 'Commercial Hub',
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="projects-container">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
