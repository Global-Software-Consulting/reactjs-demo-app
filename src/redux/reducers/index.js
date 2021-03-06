import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth";
import settings from "./settings";

const rootReducer = persistReducer(
  {
    key: "root", // key is required
    storage, // storage is now required
    whitelist: ["auth"],
  },

  combineReducers({ auth, settings })
);

export default rootReducer;
