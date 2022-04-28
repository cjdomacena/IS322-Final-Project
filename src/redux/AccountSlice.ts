import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from './store';

interface TransactionState {

}

const initialState: TransactionState = {

}

export const accountSlice = createSlice({
	name: 'transactions',
	initialState, 
	reducers: {
		updateTransaction: (state, action:PayloadAction<number>) => {
			
		}
	}
})

export const {updateTransaction} = accountSlice.actions;

export default accountSlice.reducer;