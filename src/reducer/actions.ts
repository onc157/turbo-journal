import { ActionTypes, LogbookItem } from './types';

export interface SetLogbookData {
  type: ActionTypes.setLogbookData;
  logbookData: LogbookItem[];
}

export const setLogbookData = (logbookData: LogbookItem[]): SetLogbookData => ({
  type: ActionTypes.setLogbookData,
  logbookData,
});

export interface SetFrameExpanded {
  type: ActionTypes.setFrameExpanded;
  frameIsExpanded: string | false;
}

export const setFrameExpanded = (frameIsExpanded: string | false): SetFrameExpanded => ({
  type: ActionTypes.setFrameExpanded,
  frameIsExpanded,
});
