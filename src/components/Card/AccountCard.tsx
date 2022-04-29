import React from 'react'
import { Link } from 'react-router-dom'
type Props = {
	balance: string,
	account_name: string,
  id: string
}

const AccountCard = (props: Props) => {
  return (
    <div className="border dark:border-neutral-700 w-auto p-4">
      <h1 className="text-2xl font-semibold">{props.account_name}</h1>
      <p className="leading-loose">{props.balance}</p>
      <div className=" text-sm mt-2 flex justify-between items-center">
        <div className="flex gap-4">
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
        <Link to={`accounts/${props.id}`} state={props.account_name}>
          <p className='flex text-sm items-center'>
            Transactions
          </p>
        </Link>
      </div>
    </div>
  );
}

export default AccountCard