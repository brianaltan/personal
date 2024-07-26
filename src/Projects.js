import React from 'react';
import avirenapp from './assets/avirenapp.png';
const projects = [
  {
    image: avirenapp,
    title: 'Aviren - AI Mental Wellbeing Application',
    description: 'Aviren is an application designed to tackle the challenges of depression and suicide among younger generations. We provide services that harness handcrafted models and personalize LLMs to adapt to each user\'s unique behavioral patterns, ensuring a tailored approach to mental health support.',
  },
  {
    image: 'path/to/project2/image.jpg',
    title: 'Project 2',
    description: 'Description of project 2',
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const handlePrevProject = () => {
    setCurrentProject(Math.max(0, currentProject - 1));
  };

  const handleNextProject = () => {
    setCurrentProject(Math.min(projects.length - 1, currentProject + 1));
  };

  return (
    <div style={{ marginLeft: "75px" }}>
      <h2 style={{ marginBottom: 1}}>My Projects 🚀</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <img src={projects[currentProject].image} alt={projects[currentProject].title} style={{ width: '70%', height: 'auto' }} />
          <h3 style={{ margin: '10px 0' }}>{projects[currentProject].title}</h3>
          <p>{projects[currentProject].description}</p>
          <button style={{ float: 'left' }} onClick={handlePrevProject}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
            </svg>
          </button>
          <button style={{ float: 'right' }} onClick={handleNextProject}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;