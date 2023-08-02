import React, { useEffect } from 'react';

import HorizontalLine from "../components/HorizontalLine";
import { GithubIcon, LinkedinIcon } from '../components/Icons';


type Props = {
}

const Home: React.FC<Props> = ({ }) => {
  const [playAnimation, setPlayAnimation] = React.useState(false)

  useEffect(() => {
    setPlayAnimation(true)
  }, [])

  return (
    <div className="flex flex-col items-center pt-[18vh] h-full">

      <div className={`text-[5rem] transition-all duration-[1500ms] ${playAnimation ? 'opacity-100' : 'opacity-0 -translate-y-8'} h-[7rem]`}>
        Bence Webber
      </div>

      <div className={`text-[2.3rem] transition-all duration-[1500ms] delay-[300ms] ${playAnimation ? 'opacity-60' : 'opacity-0 -translate-y-6'}`}>
        Software Developer
      </div>
      
      <HorizontalLine className="my-10 w-[45rem]" />

      <div className="flex justify-between w-28">
        <GithubIcon/>
        <LinkedinIcon/>
      </div>

    </div>
  )
}

export default Home