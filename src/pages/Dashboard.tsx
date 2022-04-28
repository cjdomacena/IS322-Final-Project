import { IAccount } from '../redux/AccountSlice';
import { useAppSelector } from '../redux/hooks';

type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useAppSelector((state) => state.accounts);


  return (
    <div className=" w-auto h-auto  m-12 dark:text-white text-neutral-900">
      {user ? (
        <div>
          <h1 className="text-2xl font-semibold"> Welcome, {user.name}! </h1>
          <div className="mt-4 w-full border-t dark:border-t-neutral-600"></div>
          <div>
            <h1>Recent Transactions</h1>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
