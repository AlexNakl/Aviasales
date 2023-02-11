import React from 'react';

import classes from './header.module.scss';
import Logo from './Logo.svg';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes['header__container-logo']}>
        <img src={Logo} alt="logo" className={classes.header__logo} />
      </div>
    </header>
  );
}

export default Header;
