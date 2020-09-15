import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {
  const navlinks = [
    {name: 'Track.it', path: '/'},
    {name: 'Progress', path: '/progress'},
    {name: 'Profile', path: '/profile'},
    {name: 'About', path: '/about'}
  ];

  return (
    <nav>
      <ul>
        { navlinks.map(link => (
          <li key={link.name}>
            <NavLink to={link.path} exact activeClassName={styles.active}>
              {link.name}
            </NavLink>
          </li>)
        )}
      </ul>
    </nav>
  );
};

export default Navbar;