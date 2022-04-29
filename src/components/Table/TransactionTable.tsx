import React from 'react'
import { IAccount, ITransactions } from '../../redux/AccountSlice';
import { formatCurrency, formatDate, formatNumber } from '../../utils';

type Props = {
  accounts: IAccount[]
}

const TransactionTable = ({accounts}:Props) => {

  console.log(accounts)
  return (
    <div className="w-full border rounded-sm dark:border-neutral-700 my-4">
      <table className="w-full">
        <thead className=" border-b">
          <tr className="text-xs text-left">
            <THeadItem text="Account" />
            <THeadItem text="Description" />
            <THeadItem text="Type" />
            <THeadItem text="Amount" />
            <THeadItem text="Date" />
          </tr>
        </thead>
        <tbody className="">
          {accounts.map((account) => account.transactions.length !== 0 ? <TRowItem account_name={account.account_name} props={account.transactions[0]} /> : null)}
        </tbody>
      </table>
    </div>
  );
}


type TRowProps = {
	props: ITransactions,
	account_name: string
}

const TRowItem = ({props, account_name}:TRowProps) => {
	return (
    <tr>
      <td className="px-2 py-4">{account_name}</td>
      <td className="px-2 py-4">{props.description}</td>
      <td className="px-2 py-4">{props.type}</td>
      <td className="px-2 py-4">{formatNumber(props.amount)}</td>
      <td className="px-2 py-4">{formatDate(new Date('2022-02-07T01:21:58'))}</td>
    </tr>
  );
}

const THeadItem = ({text}:{text:string}) => {
	return <th className='px-2 py-4 font-normal'>{text}</th>
}

export default TransactionTable;