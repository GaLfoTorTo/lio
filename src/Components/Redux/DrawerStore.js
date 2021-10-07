import { combineReducers, createStore } from "redux";
import {reducer} from './DrawerConfig';

const reducerDrawer = combineReducers({reducer});
let store = createStore(reducerDrawer);

export {store};