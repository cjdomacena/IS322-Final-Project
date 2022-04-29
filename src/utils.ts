import { IAccount, ITransactions } from './redux/AccountSlice';
export const formatCurrency = (currency: string) => {
	const preFormatCurrency = Number(currency.slice(1).split(',').join(''));

	return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(preFormatCurrency);
}

export const formatNumber = (amount:number) => {
  	return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(amount);
}

export const formatDate = (dateString: Date) => {
  return Intl.DateTimeFormat('en-US', { timeStyle: 'short', dateStyle: 'medium' }).format(new Date(dateString))
}

export const getRecentTransactions = (accounts: IAccount[]) => {
  const transactions = accounts.map((account) => {
    let account_name = account.account_name;
    let returnObj = account.transactions.map(transaction => {
      return {account_name: account_name, ...transaction}
    });
    return returnObj;
  })

  return transactions
    .flat()
    .sort((a:ITransactions, b:ITransactions) => a.created_at < b.created_at ? 1 : -1);
}

export const getAccountName = (id: string, account_names: string[]) => {
  const index = account_names.indexOf(id);
  return account_names[index];
}