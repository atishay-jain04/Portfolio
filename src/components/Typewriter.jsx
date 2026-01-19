import React, { useEffect, useState } from 'react';

/**
 * Typewriter Component - Animated text that types and deletes
 * Cycles through an array of phrases with typing and deleting animation
 */
const Typewriter = ({ phrases, typeSpeed = 100, deleteSpeed = 50, delayBetween = 2000, prefix = "I am" }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span>
      {prefix} {currentText}
    </span>
  );
};

export default Typewriter;
