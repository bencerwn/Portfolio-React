import React from 'react';


type Props = {
  className?: string
}

const HorizontalLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={`bg-white opacity-10 w-full h-[2px] ${className}`} />
  )
}

export default HorizontalLine