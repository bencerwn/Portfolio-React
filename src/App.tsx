import React, { useState } from 'react';
import './App.css';

import AnimatedTitle from './components/AnimatedTitle';


function App() {
  const [showSecond, setShowSecond] = useState(false)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[25rem] h-[25rem]">
        <AnimatedTitle 
          text="Hi,"
          delay={1000}
          after={() => {setShowSecond(true)}}
          className="text-[5rem] font-medium" 
        />
        {showSecond ?
          <AnimatedTitle 
            text="I'm Bence"
            delay={1000}
            after={() => {}}
            className="text-[5rem] font-medium" 
          /> : null
        }
      </div>
    </div>
  );
}

export default App;
