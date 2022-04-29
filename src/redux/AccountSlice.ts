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
		},
    depositToAccount: (state, action:PayloadAction<ITransactions & {account_id: string}>) => {
      let tempState = state.user;

      // Get index of the account to be modified
      const index = tempState.accounts.findIndex((account) => account.account_id === action.payload.account_id)

      // Removed the account_id from the payload given
      let {account_id, ...keepProps} = action.payload;
      let prevBalance = Number(state.user.accounts[index].balance);
      let newBalance
      switch (keepProps.type.toLowerCase()) {
        case 'withdraw': 
           newBalance = prevBalance - keepProps.amount;
           break;
        case 'deposit': 
            newBalance = prevBalance + keepProps.amount;
            break;
        default: 
          newBalance = prevBalance;
      }
      keepProps.amount = newBalance;

      tempState.accounts[index].transactions.push(keepProps);
      state.user = tempState;
    }
	}
})

export const { initialAccount, depositToAccount } = accountSlice.actions;

export default accountSlice.reducer;