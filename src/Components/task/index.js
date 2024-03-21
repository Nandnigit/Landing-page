import React, { useState, useEffect } from 'react';

const ScrollBoldText = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p style={{ fontWeight: isScrolled ? 'bold' : 'normal' }}>
        This is your text. It will be bold after scrolling.
      </p>
      <p>
        More text that remains unaffected by scrolling.
      </p>
    </div>
  );
};

export default ScrollBoldText;
