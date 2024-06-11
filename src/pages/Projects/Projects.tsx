import React, {useState, useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.scss";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

const Projects: React.FC = () => {
  const [gitHubProjects, setGitHubProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/matheus-curvelo/repos"
        );
        const data = await response.json();
        const projects: Project[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
        }));
        setGitHubProjects(projects);
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
          <Typography variant="h4">GitHub</Typography>
          <Box className="projects__box_item" component="div">
            {gitHubProjects.map(project => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                url={project.html_url}
                homepage={project.homepage}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
