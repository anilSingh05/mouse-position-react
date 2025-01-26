import React, { useState } from 'react';
import MousePosition from './MousePosition';

function ParentComponent() {

    const [showComponent, setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent((prev) => !prev);
    }

  return (
    <div>
      <button onClick={toggleComponent}>
            {showComponent ? 'Unmount Component' : 'Mount Component'}
        </button>
        {showComponent && <MousePosition />}
    </div>
  );
}

export default ParentComponent;