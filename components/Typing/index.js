import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts,
  speed = 150, 
  eraseSpeed = 100, 
  pause = 2000, 
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 

  useEffect(() => {
    const currentText = texts[textIndex]; 
    let typingSpeed = isDeleting ? eraseSpeed : speed;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); 
        }
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pause); 
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, eraseSpeed, pause]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
};

export default TypingEffect;
