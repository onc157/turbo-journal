import { Action, ActionTypes, LogbookItem } from './types';

interface LogbookStateInterface {
  logbookData: LogbookItem[] | null;
  frameIsExpanded: string | false;
}

export const initialState: LogbookStateInterface = {
  logbookData: null,
  frameIsExpanded: false,
};

export const logbookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.setLogbookData:
      return {
        ...state,
        logbookData: action.logbookData,
      };
    case ActionTypes.setFrameExpanded:
      return {
        ...state,
        frameIsExpanded: action.frameIsExpanded,
      };
    default:
      return state;
  }
};
