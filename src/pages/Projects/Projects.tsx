import React, {useState, useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.scss";

const Projects: React.FC = () => {
  const [gitHubProjects, setGitHubProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/matheus-curvelo/repos"
        );
        const data = await response.json();
        setGitHubProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <Box id="projects" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="projects__box" component="div">
          <Typography variant="h1">Projetos</Typography>
          <Typography variant="h2">GitHub</Typography>
          <Box className="projects__box_item" component="div">
            {gitHubProjects.map((project: any) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                url={project.html_url}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
