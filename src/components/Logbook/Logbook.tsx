import React, { useEffect, useReducer } from 'react';
import './style.scss';
import { initialState, logbookReducer } from '../../reducer/logbookReducer';
import { API_URL } from '../../api/constants';
import convert from 'xml-js';
import { setLogbookData } from '../../reducer/actions';

function Logbook() {
  const [state, dispatch] = useReducer(logbookReducer, initialState);

  useEffect(() => {
    if (!state.logbookData) {
      const getFetchData = async () => {
        let fetchData = await fetch(API_URL);
        let fetchDataText = await fetchData.text();
        let fetchDataJSON = JSON.parse(convert.xml2json(fetchDataText, { compact: true, spaces: 4 }));
        dispatch(setLogbookData(fetchDataJSON.rss.channel.item));
        console.log(state); // TODO: Delete log
      };
      getFetchData();
    }
  }, [state]);

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
