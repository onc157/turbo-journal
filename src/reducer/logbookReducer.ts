import { Action, ActionTypes, LogbookItem } from './types';

interface LogbookStateInterface {
  logbookData: LogbookItem[] | null;
}

export const initialState: LogbookStateInterface = {
  logbookData: null,
};

export const logbookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.setLogbookData:
      return {
        ...state,
        logbookData: action.logbookData,
      };
    default:
      return state;
  }
};
