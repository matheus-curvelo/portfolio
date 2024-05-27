
import React from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconButtonItemProps {
  href: string;
  icon: IconDefinition;
}

const IconButtonItem: React.FC<IconButtonItemProps> = ({ href, icon }) => {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      className="header__icon"
    >
      <FontAwesomeIcon icon={icon} />
    </IconButton>
  );
};

export default IconButtonItem;
