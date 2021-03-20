import { SetLogbookData, SetFrameExpanded } from './actions';

export enum ActionTypes {
  setLogbookData = 'SET_LOGBOOK_DATA',
  setFrameExpanded = 'SET_FRAME_EXPANDED',
}

export type Action = SetLogbookData | SetFrameExpanded;

export type LogbookItem = { [key: string]: any };
