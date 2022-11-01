import React from 'react';
import { useState, useEffect } from 'react';


type Props = {
  text: string,
  delay?: number,
  after: Function,
  className: string
}

const AnimatedTitle: React.FC<Props> = ({ text, delay=0, after, className }) => {
  const [content, setContent] = useState("");

  const typeKeywordAnimation = (newText: string, after: Function, index: number = 0) => {
    index++
    setContent(newText.slice(0, index));
    if (index <= newText.length) {
      setTimeout(() => {typeKeywordAnimation(newText, after, index)}, 75); 
    } else {
      after();
    }
  }

  useEffect(() => {
    setTimeout(() => {typeKeywordAnimation(text, after)}, delay);
  }, [])

  return (
    <div className={className}>
      <span className="text-primary">{content}</span>
    </div>
  )
}

export default AnimatedTitle