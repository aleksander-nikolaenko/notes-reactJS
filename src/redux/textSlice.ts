import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const textSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTextValue(_, { payload }: PayloadAction<string>) {
      return payload;
    },
  },
});

export default textSlice.reducer;
export const { setTextValue } = textSlice.actions;
