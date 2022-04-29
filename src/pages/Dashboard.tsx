import { IAccount } from '../redux/AccountSlice';
import { useAppSelector } from '../redux/hooks';
import TransactionTable from '../components/Table/TransactionTable';

type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useAppSelector((state) => state.accounts);

  const getAccountBalances = (accounts: IAccount[]) => {
    const balances = accounts.map((t) => Number(t.balance.slice(1).split(',').join('')));
    const totalBalance = balances.reduce((acc, b) => (acc += b), 0);

    return new Intl.NumberFormat(`en-US`, {
      currency: 'USD',
      style: 'currency',
    }).format(totalBalance);
  };

  const getAccountNames = (accounts: IAccount[]) => {
    const accountNames = accounts.map((t) => t.account_name);
    return accountNames;
  };

  return (
    <main className="w-auto h-auto xl:p-12 lg:p-12 md:p-8 p-4 dark:text-neutral-50 text-neutral-900">
      {user ? (
        <section className="container mx-auto">
            <div className="flex dark:border-b-neutral-700 gap-4 justify-between items-center border-b flex-wrap">
              <div>
                <h1 className="text-2xl font-semibold"> Welcome, {user.name}! </h1>
              </div>
              <div className="flex">
                <div className="p-4 w-fit">
                  <div className="mt-2">
                    <p className="text-2xl">{getAccountBalances(user.accounts)}</p>
                    <p className="text-sm leading-loose dark:text-neutral-300 text-neutral-600">
                      Total funds
                    </p>
                  </div>
                </div>
                <div className="p-4 w-fit">
                  <div className="mt-2">
                    <p className="text-2xl">{getAccountNames(user.accounts).length}</p>

                    <p className="text-sm leading-loose dark:text-neutral-300 text-neutral-600">
                      Total Accounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow my-8 ">
              <h1>Recent Transactions</h1>
              <TransactionTable accounts={user.accounts} />
            </div>
        </section>
      ) : null}
    </main>
  );
};

export default Dashboard;
