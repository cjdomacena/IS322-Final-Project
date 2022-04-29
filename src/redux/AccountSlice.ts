import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAccount {
  account_id: string;
  account_name: string,
  balance: string;
  transactions: ITransactions[]
}

export interface ITransactions {
	amount: number,
	description: string,
	type: string,
  created_at: Date | string
}

interface IUser  {
	_id: string,
	name: string,
	email: string,
	phone: string,
	address: string,
	accounts: IAccount[]
}




const initialState: { user: IUser } | null = {
  user: {
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    accounts: [
      {
        account_id: '',
        balance: '',
        account_name: '',
        transactions: [
          {
            amount: 0.0,
            description: '',
            type: '',
            created_at: '',
          },
        ],
      },
    ],
  },
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