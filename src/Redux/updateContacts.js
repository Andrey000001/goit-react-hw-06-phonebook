export const updateListContacts = value => {
  return {
    type: 'contacts/update',
    payload: value,
  };
};
export const filterContact = (state = '', action) => {
  console.log(state);
  switch (action.type) {
    case 'contacts/update':
      return action.payload.filter;
    default:
      return state;
  }
};
