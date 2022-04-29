import AccountCard from '../components/Card/AccountCard'
import { useAppSelector } from '../redux/hooks'

const Accounts = () => {

const {user} = useAppSelector(state => state.accounts);
  return (
	 <main className="w-auto h-auto xl:p-12 lg:p-12 md:p-8 p-4 dark:text-neutral-50 text-neutral-900">
		 <section>
			 <h1>My Accounts</h1>
			 <div className='my-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
			 {user ?
			 	user.accounts.map((account) => <AccountCard account_name={account.account_name} balance={account.balance} key={account.account_id} id={account.account_id} />)
			 : null}
			 </div>
		 </section>
	 </main>
  )
}

export default Accounts