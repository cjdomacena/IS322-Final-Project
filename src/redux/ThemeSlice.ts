import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
	isDarkMode: boolean
}

const initialState: IThemeState = {
	isDarkMode: false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
		state.isDarkMode = !state.isDarkMode
	},
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
