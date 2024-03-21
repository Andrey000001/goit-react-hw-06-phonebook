import { createStore, combineReducers } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const contactsInitital = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContacts = person => {
  return {
    type: 'contacts/add',
    payload: { ...person, id: nanoid() },
  };
};

export const deleteUser = userId => {
  return {
    type: 'contacts/delete',
    payload: userId,
  };
};
export const updateListContacts = ({ filter, contacts }) => {
  return {
    type: 'contacts/update',
    payload: { filter: filter, contacts: contacts || contactsInitital },
  };
};
const filterContact = (state = '', action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'contacts/update':
      return action.payload.contacts.filter(({ name }) =>
        name.includes(action.payload.filter)
      );
    default:
      return state;
  }
};
const contactsReducer = (state = contactsInitital, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
    case 'contacts/delete':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterContact,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
