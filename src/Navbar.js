import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0e0e0e',
      padding: '1rem 2rem',
    },
    logo: {
      color: '#fff',
      fontSize: '1.5rem',
      textDecoration: 'none',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      color: '#fff',
      marginLeft: '2rem',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    linkHover: {
      backgroundColor: '#000000',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <Link to="/" style={styles.logo}></Link>
      </div>
      <div style={styles.links}>
        <a
          href="https://www.linkedin.com/in/brian-altan/"
          style={styles.link}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/brianaltan"
          style={styles.link}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="mailto:brianaltan28@gmail.com"
          style={styles.link}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
