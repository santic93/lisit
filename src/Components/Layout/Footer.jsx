import React, { useEffect, useState } from 'react';
import './Footer.css';
export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFooterVisible(false);
      } else {
        setIsFooterVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div>
  {isFooterVisible && (
    <nav className='navbar fixed-bottom bg-body-tertiary footer'>
      <div className='container-fluid d-flex justify-content-center'>
        <p className='fw-bold footerText text-center'>Starwars | 2023</p>
      </div>
    </nav>
  )}
</div>

  );
}
