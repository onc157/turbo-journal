import React from 'react';
import './style.scss';
import navbarLogo from '../../assets/images/navbar-logo.png';
import accountIcon from '../../assets/icons/account.png';
import vpsIcon from '../../assets/icons/vps.png';
import domainsIcon from '../../assets/icons/domains.png';
import logbookIcon from '../../assets/icons/logbook.png';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar__logo">
        <img src={navbarLogo} alt="navbar-logo" />
      </div>
      <div className="navbar__list">
        <div className="navbar__list--item">
          <div className="list--item_logo">
            <img src={accountIcon} alt="account-icon" />
          </div>
          <div className="list--item_name">АККАУНТ</div>
        </div>
        <div className="navbar__list--item">
          <div className="list--item_logo">
            <img src={vpsIcon} alt="vps-icon" />
          </div>
          <div className="list--item_name">VPS</div>
        </div>
        <div className="navbar__list--item">
          <div className="list--item_logo">
            <img src={domainsIcon} alt="domains-icon" />
          </div>
          <div className="list--item_name">ДОМЕНЫ</div>
        </div>
        <div className="navbar__list--item navbar__list--item-active">
          <div className="list--item_logo">
            <img src={logbookIcon} alt="logbook-icon" />
          </div>
          <div className="list--item_name">БОРТОВОЙ ЖУРНАЛ</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
