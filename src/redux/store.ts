import {configureStore} from '@reduxjs/toolkit';
import accountReducer from './AccountSlice'
import themeReducer from './ThemeSlice'
export const store = configureStore({
	reducer: {
		accounts: accountReducer,
		theme: themeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;