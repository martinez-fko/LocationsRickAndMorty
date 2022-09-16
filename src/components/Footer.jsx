import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href=''></a>
      <p>Francisco Martínez</p>
      <a
        href='https://github.com/martinez-fko/LocationsRickAndMorty'
        className='icon'
        target={'_blank'}
      >
        <i className='bx bxl-github'></i>
      </a>
      <a
        href='https://francisco-mtz.netlify.app/'
        target={'_blank'}
        className='icon'
      >
        <i className='bx bx-briefcase'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/francisco-martinez123/'
        target={'_blank'}
        className='icon'
      >
        <i className='bx bxl-linkedin'></i>
      </a>
    </footer>
  );
};

export default Footer;
