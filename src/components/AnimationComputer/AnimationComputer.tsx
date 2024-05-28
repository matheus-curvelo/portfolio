import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/AnimationComputer.json"; // substitua pelo caminho do seu arquivo JSON
import "./AnimationComputer.scss";
import "animate.css";

const AnimationComputer: React.FC = () => {
  return (
    <Lottie
      id="animation_computer"
      className="animate__animated animate__fadeIn"
      animationData={animationData}
    />
  );
};

export default AnimationComputer;
