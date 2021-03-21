import React, { useEffect, useReducer } from 'react';
import './style.scss';
import { initialState, logbookReducer } from '../../reducer/logbookReducer';
import { API_URL } from '../../api/constants';
import convert from 'xml-js';
import { setFrameExpanded, setLogbookData } from '../../reducer/actions';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Preloader from '../Preloader/Preloader';
import useStyles from './style';

function Logbook() {
  const [state, dispatch] = useReducer(logbookReducer, initialState);
  const classes = useStyles();

  const getFetchData = async () => {
    let fetchData = await fetch(API_URL);
    let fetchDataText = await fetchData.text();
    let fetchDataJSON = JSON.parse(convert.xml2json(fetchDataText, { compact: true, spaces: 4 }));
    dispatch(setLogbookData(fetchDataJSON.rss.channel.item));
  };

  useEffect(() => {
    if (!state.logbookData) {
      getFetchData();
    }
  }, [state]);

  if (!state.logbookData) {
    return <Preloader />;
  }

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    if (isExpanded) getFetchData();
    dispatch(setFrameExpanded(isExpanded ? panel : false));
  };

  const articles = state.logbookData.map((article, i) => {
    return (
      <div className="logbook__articles--item" key={article.link._text}>
        <Accordion expanded={state.frameIsExpanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls={`panel${i}a-content`}
            id={`panel${i}a-header`}
          >
            <div className="articles--item-title">{article['turbo:topic']._text}</div>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <div className="articles--item-body" dangerouslySetInnerHTML={{ __html: article['turbo:content']._cdata }}></div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });

  return (
    <div className="logbook-wrapper">
      <div className="logbook__header">
        <div className="logbook__header--subtitle">Бортовой журнал</div>
        <div className="logbook__header--title">Бортовой журнал</div>
      </div>
      <div className="logbook__articles">{state.logbookData ? articles : <Preloader />}</div>
    </div>
  );
}

export default Logbook;
