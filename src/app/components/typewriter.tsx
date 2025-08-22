"use client";
import { useState, useEffect } from "react";

export const useTypewriter = (
  text: string,
  speed: number = 100,
  deleteSpeed: number = 50,
  delayBetween: number = 2000
) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing forward
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, delayBetween]);

  return displayText;
};

// Simple typewriter that types once and stays
interface SimpleTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export const SimpleTypewriter: React.FC<SimpleTypewriterProps> = ({
  text,
  speed = 100,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        // Typing forward
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayText(currentText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
