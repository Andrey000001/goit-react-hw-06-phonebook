import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      const existingContact = state.contacts.find(
        ({ name }) => name === action.payload.name
      );
      if (existingContact) {
        return alert('Contact already exists!');
      }
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};
export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
