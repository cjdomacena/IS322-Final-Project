import {useLocation} from 'react-router-dom'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDarkMode } from '../../redux/ThemeSlice'
import {BiMenu} from 'react-icons/bi'
import Drawer from './Drawer'
import { useState } from 'react'

const Nav = () => {
  const location = useLocation();
  let currentLocation = location.pathname.replace("/", "")
  currentLocation = currentLocation.replace("-", " ");
  const dispatch = useAppDispatch();
  const {isDarkMode} = useAppSelector(state => state.theme);
  let navTitle:any = location.state ? location.state : currentLocation;

  const [isDrawerOpen, toggleDrawer] = useState<boolean>(false);

 const handleToggle = () => {
	 dispatch(toggleDarkMode())

  const bodyTag = document.getElementsByTagName('BODY')[0]
    bodyTag.classList.toggle('dark');
    bodyTag.classList.toggle('bg-[#0c0c0c]');
   
 }

  return (
    <nav className="h-16 border-b dark:border-b-neutral-800 w-full flex items-center">
      <div className="w-full xl:mx-12 lg:mx-12 mx-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <button className="h-fit xl:hidden lg:hidden md:hidden block" onClick={() => toggleDrawer(true)}>
              <BiMenu className="dark:text-neutral-50 w-5 h-5" />
            </button>
          <h1 className="capitalize font-bold dark:text-neutral-50">
            {navTitle.length < 1 ? 'Overview' : navTitle}
          </h1>
        </div>
        <button onClick={handleToggle}>
          {!isDarkMode ? (
            <MdDarkMode className="w-6 h-6 " />
          ) : (
            <MdLightMode className="w-6 h-6 text-neutral-50" />
          )}
        </button>
      </div>
      {isDrawerOpen ? <Drawer toggleMinimized={toggleDrawer} minimized={false} /> : false}
    </nav>
  );
}

export default Nav