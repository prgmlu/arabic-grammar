import { createSlice } from '@reduxjs/toolkit';

const ruleSlice = createSlice({
  name: 'rule',
  initialState: [],
  reducers: {
    setRules: (state, action) => {
      return action.payload;
    }
  }
});

export const { setRules } = ruleSlice.actions;

export default ruleSlice.reducer;
