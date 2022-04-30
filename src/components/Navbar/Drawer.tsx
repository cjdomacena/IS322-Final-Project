import {SetStateAction,  Dispatch} from 'react'
import { BsWallet2, BsPlusLg } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { GiPayMoney } from 'react-icons/gi';
import { RiDashboardLine } from 'react-icons/ri';
import ListItem from './ListItem';

type Props = {
	toggleMinimized: Dispatch<SetStateAction<boolean>>,
	minimized: boolean
}

const Drawer = (props: Props) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-auto dark:text-neutral-50 text-neutral-900 dark:bg-neutral-900 bg-white border-r p-2 dark:border-r-neutral-700">
      <div className="py-8 px-2 h-full">
        <button
          className="absolute right-4 top-4 rounded-full"
          onClick={() => props.toggleMinimized((prev) => !prev)}>
          <CgClose />
        </button>
        <GiPayMoney className="dark:text-neutral-50 w-5 h-5" />
        <h1 className="font-bold text-xl text-neutral-800 dark:text-neutral-50">Drop.io</h1>
        <p className="text-sm dark:text-neutral-50"> Your no. 1 banking app</p>

        <ul className="mt-12 space-y-4 font-medium">
          <ListItem
            svgIcon={<RiDashboardLine />}
            path="/"
            text="Overview"
            minimized={props.minimized}
          />
          <ListItem
            svgIcon={<BsWallet2 />}
            path="/accounts"
            text="My Accounts"
            minimized={props.minimized}
          />
          <ListItem
            svgIcon={<BsPlusLg />}
            path="/new-transfer"
            text="New Transfer"
            minimized={props.minimized}
          />
        </ul>
      </div>
    </aside>
  );
}

export default Drawer