import ListItem from './ListItem'
import {RiDashboardLine} from 'react-icons/ri';
import {BsWallet2, BsPlusLg} from 'react-icons/bs';
import {AiOutlineTransaction} from 'react-icons/ai'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <aside className="h-screen w-64 border-r dark:border-r-neutral-800 shadow-sm">
      <div className="px-4 py-8 h-full">
        <div>
          <h1 className="font-bold text-xl text-neutral-800 dark:text-neutral-50 px-4">My Account</h1>
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