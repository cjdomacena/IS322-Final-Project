import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils'
import Modal, { TransactionType } from '../Modal'
type Props = {
	balance: number,
	account_name: string,
  id: string
}

const AccountCard = (props: Props) => {

  const [isModalOpen, toggleModal] = useState(false);
  const [type, setType] = useState<TransactionType>(TransactionType.deposit)

  function handleModal(type:TransactionType) {
      setType(type)
      toggleModal(prev => !prev);
  }

  return (
    <div className="border dark:border-neutral-700 w-auto p-4">
      <h1 className="text-2xl font-semibold">{props.account_name}</h1>
      <p className="leading-loose">{formatCurrency(props.balance)}</p>
      <div className=" text-sm mt-2 flex justify-between items-center">
        <div className="flex gap-4">
          <button onClick={() => handleModal(TransactionType.deposit)}>Deposit</button>
          <button onClick={() => handleModal(TransactionType.withdraw)}>Withdraw</button>
        </div>
        <Link to={`/accounts/${props.id}`} state={props.account_name}>
          <p className="flex text-sm items-center">Transactions</p>
        </Link>
      </div>
      {isModalOpen ? <Modal type={type} toggleModal={toggleModal} account_name={props.account_name} account_id={props.id} balance={props.balance} /> : null}
    </div>
  );
}

export default AccountCard