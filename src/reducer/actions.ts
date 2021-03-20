import { ActionTypes, LogbookItem } from './types';

export interface SetLogbookData {
  type: ActionTypes.setLogbookData;
  logbookData: LogbookItem[];
}

export const setLogbookData = (logbookData: LogbookItem[]): SetLogbookData => ({
  type: ActionTypes.setLogbookData,
  logbookData,
});
