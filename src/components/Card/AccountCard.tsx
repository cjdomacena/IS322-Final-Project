import React from 'react'

type Props = {
	balance: string,
	account_name: string
}

const AccountCard = (props: Props) => {
  return (
    <div className='border dark:border-neutral-700 w-fit p-4'>
      <h1 className='text-2xl font-semibold'>{props.account_name}</h1>
      <p className='leading-loose'>{props.balance}</p>
      <div className='space-x-2 text-sm mt-2'>
        <button>Transactions</button>
        <button>Transfer Funds</button>
      </div>
    </div>
  );
}

export default AccountCard