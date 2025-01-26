import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

// Mouse Position App

function MousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    console.log('MousePosition component mounted');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
        console.log('MousePosition component unmounted');
    };
  }, []);

  return (
    <>
      <h1>
        Mouse Position
    </h1>
    <div className="card">
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
      </div>
    </>
  )
}

export default MousePosition
