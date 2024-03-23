import { nanoid } from 'nanoid';
export const contactsInitital = [
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
export const contactsReducer = (state = contactsInitital, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
    case 'contacts/delete':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};