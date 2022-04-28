import ListItem from './ListItem'
import {RiDashboardLine} from 'react-icons/ri';
import {BsWallet2, BsPlusLg} from 'react-icons/bs';
import {AiOutlineTransaction} from 'react-icons/ai'
import {GiPayMoney} from 'react-icons/gi'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <aside className="h-screen w-52 border-r dark:border-r-neutral-800 shadow-sm">
      <div className="px-4 py-8 h-full">
        <div className='px-4'>
          <GiPayMoney className='dark:text-neutral-50 w-5 h-5'  />
          <h1 className="font-bold text-xl text-neutral-800 dark:text-neutral-50">
            Drop.io
          </h1>
          <p className='text-sm'> Your no. 1 banking app</p>
        </div>
        <ul className="mt-12 space-y-4 font-medium">
          <ListItem svgIcon={<RiDashboardLine />} path="/" text="Overview" />
          <ListItem svgIcon={<BsWallet2 />} path="/accounts" text="My Accounts" />
          <ListItem svgIcon={<BsPlusLg />} path="/new-transfer" text="New Transfer" />
          <ListItem svgIcon={<AiOutlineTransaction />} path="/transactions" text="Transactions" />
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;