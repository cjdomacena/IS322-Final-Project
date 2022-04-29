import ListItem from './ListItem'
import {RiDashboardLine} from 'react-icons/ri';
import {BsWallet2, BsPlusLg} from 'react-icons/bs';
import {GiPayMoney} from 'react-icons/gi'
import { useState } from 'react';
import {CgPushLeft, CgPushRight} from 'react-icons/cg'
type Props = {}

const Navbar = (props: Props) => {

  const [minimized, toggleMinimized] = useState<boolean>(false);

 
  return (
    <aside
      className={`h-screen border-r dark:border-r-neutral-800 shadow-sm relative w-auto xl:block lg:block md:block hidden transition-none`}>
      <div className=" py-8 h-full">
        <button className="absolute right-4 top-4 rounded-full" onClick={() => toggleMinimized((prev) => !prev)}>
          {' '}
          {minimized ? (
            <CgPushRight className="dark:text-white w-5 h-5" />
          ) : (
            <CgPushLeft className="dark:text-white w-5 h-5" />
          )}
        </button>
        <div className="px-4">
          {minimized ? null : (
            <>
              <GiPayMoney className="dark:text-neutral-50 w-5 h-5" />
              <h1 className="font-bold text-xl text-neutral-800 dark:text-neutral-50">Drop.io</h1>
              <p className="text-sm dark:text-neutral-50"> Your no. 1 banking app</p>
            </>
          )}
        </div>

        <ul className="mt-12 space-y-4 font-medium px-2">
          <ListItem svgIcon={<RiDashboardLine />} path="/" text="Overview" minimized={minimized} />
          <ListItem
            svgIcon={<BsWallet2 />}
            path="/accounts"
            text="My Accounts"
            minimized={minimized}
          />
          <ListItem
            svgIcon={<BsPlusLg />}
            path="/new-transfer"
            text="New Transfer"
            minimized={minimized}
          />
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;