import React from 'react';

import HorizontalLine from "../components/HorizontalLine";


type Props = {
}

const Home: React.FC<Props> = ({ }) => {
  return (
    <div className="flex flex-col items-center h-full">

      <div className="text-[5rem] mt-[18vh] h-[7rem]">
        Bence Webber
      </div>

      <div className="text-[2.3rem] opacity-60">
        Software Developer
      </div>
      
      <HorizontalLine className="my-10 w-[45rem]" />

    </div>
  )
}

export default Home