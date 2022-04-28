import Breakdown from '../components/Chart/Breakdown';
import { IAccount } from '../redux/AccountSlice';
import { useAppSelector } from '../redux/hooks';

type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useAppSelector((state) => state.accounts);
  
   const getAccountBalances = (accounts: IAccount[]) => {
    const balances = accounts.map(t => t.balance.slice(1).split(',').join(''));
    return balances
  }

  const getAccountNames = (accounts: IAccount[]) => {
    const accountNames = accounts.map(t => t.account_name)
    return accountNames
  }


  return (
    <div className="w-auto h-auto xl:p-12 lg:p-12 md:p-8 p-4 dark:text-white text-neutral-900">
      {user ? (
        <div>
          <h1 className="text-2xl font-semibold"> Welcome, {user.name}! </h1>
          <div className="mt-4 w-full border-t dark:border-t-neutral-600"></div>
          <div className='flex gap-4 flex-wrap'>
              <div className="w-96 h-fit flex flex-col p-4">
                <h1 className='text-center my-8 text-lg font-semibold'>Account Breakdown</h1>
                <Breakdown
                  labels={getAccountNames(user.accounts)}
                  data={getAccountBalances(user.accounts)}
                />
              </div>
              <div className='my-12 flex-grow text-neutral-900 dark:text-neutral-50'>
              <h1 className='font-medium'>Recent Transactions</h1>
              </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
