import { useState } from 'react';
import './App.css';

export default function RotatingImage({ src, alt }) {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // match animation duration
  };

  return (
    <div
      className="flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full  cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-35 object-contain ${rotate ? 'rotate-once' : ''}`}
      />
    </div>
  );
}