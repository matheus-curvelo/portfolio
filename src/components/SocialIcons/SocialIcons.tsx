import React from 'react';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./SocialIcons.scss";

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/matheus-curvelo',
    icon: <LinkedInIcon />,
  },
  {
    href: 'https://github.com/matheus-curvelo',
    icon: <GitHubIcon />,
  },
  {
    href: 'mailto:matheuscurvelo@gmail.com',
    icon: <EmailIcon />,
  },
  {
    href: 'https://wa.me/5511982382008',
    icon: <WhatsAppIcon />,
  },
];

const SocialIcons: React.FC = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <Link className='header__icons_item' key={index} color="inherit" href={link.href}>
          {link.icon}
        </Link>
      ))}
    </>
  );
};

export default SocialIcons;
