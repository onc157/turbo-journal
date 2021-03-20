import React from 'react';
import './style.scss';
import Logbook from '../Logbook/Logbook';
import noticeIcon from '../../assets/icons/notice.png';
import { Badge } from '@material-ui/core';

function Content() {
  return (
    <div className="content-wrapper">
      <div className="content--header">
        <div className="content--header__balance">100.00 ₽</div>
        <div className="content--header__profile">
          <Badge badgeContent={4} color="secondary">
            <img src={noticeIcon} alt="notice-icon" />
          </Badge>
          <div className="header__profile--name">vikavishny</div>
        </div>
        <div className="content--header__auth">Выйти</div>
      </div>
      <Logbook />
    </div>
  );
}

export default Content;
