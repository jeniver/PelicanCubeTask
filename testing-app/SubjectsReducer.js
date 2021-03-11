import {combineReducers} from 'redux';
import { REHYDRATE } from "redux-persist";

// Initial State
export const UserInitialState = {
  current: [],
  all_subjects: [
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
    'Economics',
    'Geography',
    'History',
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
    'Economics',
    'Geography',
    'History',
  ],
};
// Reducer
export const UserReducer = (state = UserInitialState, action) => {
  // Destructure state object
  let {current, all_subjects} = state;

  switch (action.type) {
    case REHYDRATE:
      if (action.payload) {
        current = action.payload.user.current;
        all_subjects = action.payload.user.all_subjects;
      }
      break;
  }

  return {
    current,
    all_subjects,
  
  };
};
