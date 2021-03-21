import React from 'react';
import './style.scss';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer__legal">
        <div className="footer__legal--item">
          © 2001– 2018 ООО <span className={'important-text'}>«СпейсВэб»</span>
        </div>
        <div className="footer__legal--item">Все права защищены.</div>
        <div className="footer__legal--item">
          Лицензия <span className={'important-text'}>№163230</span>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts--item">
          <span className={'important-text'}>+7 (812) 334-12-22</span> (в Санкт-Петербурге)
        </div>
        <div className="footer__contacts--item">
          <span className={'important-text'}>+7 (495) 663-16-12</span> (в Москве)
        </div>
        <div className="footer__contacts--item">
          <span className={'important-text'}>(800) 100-16-15</span> (бесплатно по России)
        </div>
      </div>
    </div>
  );
}

export default Footer;
