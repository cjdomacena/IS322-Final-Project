import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Modal, { TransactionType } from '../components/Modal';
import TransactionTable from '../components/Table/TransactionTable';
import { IAccount } from '../redux/AccountSlice';
import { useAppSelector } from '../redux/hooks';
import { formatCurrency } from '../utils';


const Transactions = () => {

  const [account, setAccount] = useState<IAccount | null>(null);
  const {user} = useAppSelector(state => state.accounts);
  const {id} = useParams();
  const [isModalOpen, toggleModal] = useState<boolean>(false);
  const [type,setType] = useState<TransactionType>(TransactionType.deposit)


  function handleTransaction(type:TransactionType) {
    setType(type);
    toggleModal(true);
  }  


  useEffect(() => {
    if(id) {
      const userAccount = user.accounts.filter((account) => account.account_id === id);
      setAccount(userAccount[0])
    } else {
      alert("Can't find account")
    }
  }, [id, user])
 

  return account ? (
    <main className="w-auto h-auto xl:p-12 lg:p-12 md:p-8 p-4 dark:text-neutral-50 text-neutral-900">
      <section className="container mx-auto">
        <div className="border-b pb-2 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed"> {account.account_name}</h1>
            <p className=" text-neutral-600 dark:text-neutral-400">
              {formatCurrency(account.balance)}
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleTransaction(TransactionType.deposit)}>Deposit</button>
            <button onClick={() => handleTransaction(TransactionType.withdraw)}>Withdraw</button>
          </div>
        </div>
        <TransactionTable accounts={[account]} />
      </section>
      {isModalOpen ? (
        <Modal
          type={type}
          toggleModal={toggleModal}
          account_name={account.account_name}
          account_id={account.account_id}
          balance={account.balance}
        />
      ) : null}
    </main>
  ) : null;
}

export default Transactions;