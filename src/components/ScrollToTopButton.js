import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100 )
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);

    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop} >
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" fill-rule="evenodd" d="M10.1025513,7.22165154 C13.549533,10.6902823 15.8466074,12.9862104 16.9937744,14.109436 C17.1906416,14.2940129 17.5317688,14.6698914 18.0392151,14.1790161 C18.3775126,13.851766 18.3644409,13.4939982 18,13.1057129 L10.556488,5.67610168 C10.432251,5.55870056 10.2805653,5.5 10.1014311,5.5 C9.92229687,5.5 9.76473264,5.55870056 9.6287384,5.67610168 L2.17555237,13.3108978 C1.93475791,13.6991321 1.94470649,14.025777 2.20539811,14.2908324 C2.46608974,14.5558878 2.78324382,14.5701396 3.15686035,14.3335876 L10.1025513,7.22165154 Z"/>
    </svg>
    </button>
  )
  
}