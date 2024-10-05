import React, { useState } from 'react';

const Circle = ({ cx, cy, id, name }) => {
  // console.log(name)
  const [isHovered, setIsHovered] = useState(false);
  // localStorage.setItem('hoveredCircleId', id); 
  // console.log('hii from circle.jsx',id)

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <circle
      cx={cx}
      cy={cy}
      id={id}
      name={name}
      style={{ 
        fill: isHovered ? '#f00' : '#000', // Color change on hover
        transition: 'fill 0.3s ease', // Smooth transition
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default Circle;
