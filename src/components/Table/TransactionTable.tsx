import { IAccount, ITransactions } from '../../redux/AccountSlice';
import { formatDate, formatNumber, getRecentTransactions } from '../../utils';

type Props = {
  accounts: IAccount[]
}

const TransactionTable = ({accounts}:Props) => {
  const transactions = getRecentTransactions(accounts);
  return (
    <div className="w-full border rounded-sm dark:border-neutral-700 my-4">
      <table className="w-full ">
        <thead className=" border-b dark:border-b-neutral-700">
          <tr className="text-xs text-left">
            <THeadItem text="Account" />
            <THeadItem text="Description" />
            <THeadItem text="Type" />
            <THeadItem text="Amount" />
            <THeadItem text="Date" />
          </tr>
        </thead>
        <tbody className="">
          {transactions ? transactions.map((transaction, index) => <TRowItem props={transaction} key={index} />) : null}
        </tbody>
      </table>
    </div>
  );
}


type TRowProps = {
	props: ITransactions & {account_name: string} ,
}

const TRowItem = ({props}:TRowProps) => {
	return (
    <tr className="text-sm even:bg-neutral-200 dark:even:bg-neutral-800">
      <td className="px-2 py-4">{props.account_name}</td>
      <td className="px-2 py-4">{props.description}</td>
      <td className="px-2 py-4">{props.type}</td>
      <td className="px-2 py-4 text-xs">
        <p
          className={` w-fit p-1 rounded text-neutral-50 ${
            props.type === 'Deposit' ? 'bg-green-600' : 'bg-red-600 '
          }`}>
          {formatNumber(props.amount)}
        </p>
      </td>
      <td className="px-2 py-4">{formatDate(new Date(props.created_at.toString()))}</td>
    </tr>
  );
}

const THeadItem = ({text}:{text:string}) => {
	return <th className='px-2 py-4 font-normal'>{text}</th>
}

export default TransactionTable;