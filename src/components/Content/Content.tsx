import React from 'react';
import './style.scss';
import Logbook from '../Logbook/Logbook';
import { Badge } from '@material-ui/core';
import { NotificationsNoneOutlined } from '@material-ui/icons';

function Content() {
  return (
    <div className="content-wrapper">
      <div className="content--header">
        <div className="content--header__balance">100.00 ₽</div>
        <div className="content--header__profile">
          <Badge className="header__profile--notice" badgeContent={4} color="secondary">
            <NotificationsNoneOutlined />
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
