import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  TrendingUp, PieChart, User,
} from 'react-feather';
import styles from './styles.module.css';

const Navbar = () => {
  const navlinks = [
    { name: 'Track.it', path: '/', icon: <TrendingUp /> },
    { name: 'Progress', path: '/progress', icon: <PieChart /> },
    { name: 'Profile', path: '/profile', icon: <User /> },
  ];

  return (
    <nav className={styles.Navbar}>
      <ul>
        { navlinks.map(link => (
          <li key={link.name}>
            <NavLink to={link.path} exact activeClassName={styles.active}>
              <span className={styles.arrowDown} />
              {link.icon}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
