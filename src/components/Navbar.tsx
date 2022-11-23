import React from 'react';


type Props = {
}

const Navbar: React.FC<Props> = ({ }) => {
  return (
    <div className="flex justify-center items-center w-full h-40">
      <div>Home</div>
      <div>About</div>
    </div>
  )
}

export default Navbar