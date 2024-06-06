import React, {useState, useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.scss";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [vercelProjects, setVercelProjects] = useState<any[]>([]);

  // Token de acesso pessoal Vercel
  const VERCEL_TOKEN = "vDyaIATNKz1qKTGT271DK2Au";

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/matheus-curvelo/repos"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    const fetchVercelProjects = async () => {
      try {
        const response = await fetch("https://api.vercel.com/v8/projects", {
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
          },
        });
        const data = await response.json();
        setVercelProjects(data.projects);
      } catch (error) {
        console.error("Erro ao buscar projetos do Vercel:", error);
      }
    };

    fetchGitHubProjects();
    fetchVercelProjects();
  }, []);

  return (
    <Box id="projects" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="projects__box" component="div">
          <Typography variant="h1">Projetos</Typography>
          <Typography variant="h2">Projetos GitHub</Typography>
          <Box className="projects__box_item" component="div">
            {projects.map((project: any) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                url={project.html_url}
              />
            ))}
          </Box>
          <Typography variant="h2">Projetos Vercel</Typography>
          <Box className="projects__box_item" component="div">
            {vercelProjects.map((project: any) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={
                  project.latestDeployments
                    ? project.latestDeployments[0].meta.githubCommitMessage
                    : "No description"
                }
                url={`https://vercel.com/matheuscurvelos-projects/${project.name}`}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
