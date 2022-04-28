import { useAppSelector } from '../redux/hooks';

type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useAppSelector((state) => state.accounts);

  return (
    <div className=" w-auto h-auto border m-12 dark:text-white text-neutral-900">
      {user ? (
        <div>
          <h1 className='text-2xl font-semibold'> Welcome, {user.name}! </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
