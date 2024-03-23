export const deleteUser = userId => {
  return {
    type: 'contacts/delete',
    payload: userId,
  };
};
