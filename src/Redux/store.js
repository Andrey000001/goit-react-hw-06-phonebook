import { createStore, combineReducers } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterContact } from './updateContacts';
import { contactsReducer } from './contactAdd';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterContact,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
