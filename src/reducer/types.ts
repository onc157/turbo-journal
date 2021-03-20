import { SetLogbookData } from './actions';

export enum ActionTypes {
  setLogbookData = 'SET_LOGBOOK_DATA',
}

export type Action = SetLogbookData;

export type LogbookItem = { [key: string]: any };
