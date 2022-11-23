import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


type Props = {
}


const iconSize = "35"

export const GithubIcon: React.FC<Props> = ({ }) => {
  return (
    <a href="https://github.com/bencerwn" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-transform">
      <BsGithub size={iconSize} />
    </a>
  )
}

export const LinkedinIcon: React.FC<Props> = ({ }) => {
  return (
    <a href="https://linkedin.com/in/bencewebber" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-transform">
      <BsLinkedin size={iconSize} />
    </a>
  )
}