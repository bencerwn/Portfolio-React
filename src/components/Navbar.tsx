import React from 'react';
import { Link, useLocation } from "react-router-dom";


type Props = {
}

const Navbar: React.FC<Props> = ({ }) => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center w-full h-40">
      <div>Home</div>
      <div>About</div>
    </div>
  )
}

export default Navbar