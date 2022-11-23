import React from 'react';


type Props = {
}

const Home: React.FC<Props> = ({ }) => {
  return (
    <div className="flex justify-center items-center h-full subpixel-antialiased">
      <div className="flex flex-col items-start w-[40rem] h-[25rem]">
        <div className="text-3xl font-semibold">
          Hi, I'm
        </div>

        <div className="text-[5rem] font-semibold">
          Bence Webber
        </div>

        <button 
          onClick={() => { window.open('https://github.com/bencerwn?tab=repositories', '_blank'); }}
          className="transition-colors border border-white border-opacity-60 hover:border-opacity-100 rounded-lg text-2xl px-6 py-2"
        >
          Projects
        </button>
      </div>
    </div>
  )
}

export default Home