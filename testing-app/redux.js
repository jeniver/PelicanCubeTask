import { combineReducers, createStore, applyMiddleware } from "redux";

import { UserInitialState, UserReducer } from "./SubjectsReducer";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";


const getInitialState = () => ({
  user: UserInitialState,
});

const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
  };

  const rootReducer = combineReducers({
    user: UserReducer,
  
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    getInitialState(),
    // applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore();
