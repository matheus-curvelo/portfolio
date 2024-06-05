import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import "./Projects.scss";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/matheus-curvelo/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Box id="projects" component="section" py={8}>
      <Container maxWidth="xl">
        <Typography variant="h1">Projetos</Typography>
        <Box className="projects__box" component="div">
          {projects.map((project: any) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              url={project.html_url}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
