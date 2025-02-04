import React from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pro1 from "../../assets/Projects/Graphic.webm";
import pro2 from "../../assets/Projects/Graphic Design.webm";
import pro3 from "../../assets/Projects/Interior Design.webm";
import pro4 from "../../assets/Projects/WEb.webm";
import pro5 from "../../assets/Projects/Photography.webm";
import pro6 from "../../assets/Projects/Digital market.webm";
import pro7 from "../../assets/Projects/2D animation.webm";
import pro8 from "../../assets/Projects/3D.webm";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectsClick = (path) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <Container
      maxWidth="lg"
      className="w-full h-auto gap-14 flex flex-col p-5 bg-[#171717] box-border mt-10 mb-16"
      id="projects"
    >
      <Typography className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-headColor font-poppins font-semibold">
        Projects
      </Typography>
      <Box className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5">
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/graphic-design")}
        >
          <video
            src={pro1}
            alt="Graphic Design"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/motion-graphics")}
        >
          <video
            src={pro2}
            alt="Motion Graphics"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/interior-design")}
        >
          <video
            src={pro3}
            alt="Interior Design"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/web")}
        >
          <video
            src={pro4}
            alt="Web Development"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/photography")}
        >
          <video
            src={pro5}
            alt="Photography"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/digital-marketing")}
        >
          <video
            src={pro6}
            alt="Digital Marketing"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/2d")}
        >
          <video
            src={pro7}
            alt="2D Animation"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        <Card
          className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleProjectsClick("projects/3d")}
        >
          <video
            src={pro8}
            alt="3D Animation"
            className="w-full h-full object-cover rounded-lg"
            playsInline
            autoPlay
            loop
            muted
          />
        </Card>
        )
      </Box>
    </Container>
  );
};

export default Projects;
