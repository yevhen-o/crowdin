import * as cases from './cases';

const initialState = {
  historyChanges: [],
};

const appReducer = (state = initialState, { type, payload = {} }) => {
  switch(type) {
    case cases.APP_HISTORY_CHANGED:
      return {
        ...state,
        historyChanges: [...state.historyChanges, payload],
      };
    default:
      return state;
  }
};

export default appReducer;