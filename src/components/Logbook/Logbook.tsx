import React from 'react';
import './style.scss';

function Logbook() {
  return (
    <div className="logbook-wrapper">
      <div className="logbook__header">
        <div className="logbook__header--description">Бортовой журнал</div>
        <div className="logbook__header--title">Бортовой журнал</div>
      </div>
      <div className="logbook__articles">Articles</div>
    </div>
  );
}

export default Logbook;
