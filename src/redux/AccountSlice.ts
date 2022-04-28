import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from './store';

interface IAccount {
  account_id: string;
  balance: string;
  transactions: ITransactions[]
}

interface ITransactions {
	amount: number,
	origin: string,
	destination: string,
	description: string,
	type: string
}

interface IUser  {
	_id: string,
	name: string,
	email: string,
	phone: string,
	address: string,
	accounts: IAccount[]
}




const initialState: {user: IUser} | null = {
  user: {_id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  accounts: [
    {
      account_id: '',
      balance: '',
      transactions: [
        {
          amount: 0.00,
          origin: "",
          destination: "",
          description: "",
          type: "",
        },
      ],
    },
  ],}
};

export const accountSlice = createSlice({
	name: 'transactions',
	initialState, 
	reducers: {
		initialAccount: (state, action: PayloadAction<IUser>) => {
			state.user = {...action.payload}
		}
	}
})

export const { initialAccount } = accountSlice.actions;

export default accountSlice.reducer;