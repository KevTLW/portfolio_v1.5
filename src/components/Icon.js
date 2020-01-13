import React from 'react';
import icons from 'simple-icons';

const Icon = ({ color, icon, width }) => {
  switch (icon) {
    case 'Django':
      color = '#20AA76';
      break;
    case 'Flask':
      color = '#ffffff';
      break;
    default:
      break;
  }

  return (
    <svg aria-label={`${icon} logo`} width={width || '2em'} role='img' viewBox='0 0 24 24'>
      <title>{icon}</title>
      <text aria-label=''>{icon}</text>
      <path
        d={icons[icon].path}
        fill={color || `#${icons[icon].hex}`}
      ></path>
    </svg>
  );
}

export default Icon;
