import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    updateContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
