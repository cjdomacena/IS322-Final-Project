import {useLocation} from 'react-router-dom'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDarkMode } from '../../redux/ThemeSlice'

const Nav = () => {
  const location = useLocation();
  let currentLocation = location.pathname.replace("/", "")
  currentLocation = currentLocation.replace("-", " ");
  const dispatch = useAppDispatch();
  const {isDarkMode} = useAppSelector(state => state.theme);
  let navTitle:any = location.state ? location.state : currentLocation

 const handleToggle = () => {
	 dispatch(toggleDarkMode())

  const bodyTag = document.getElementsByTagName('BODY')[0]
    bodyTag.classList.toggle('dark');
    bodyTag.classList.toggle('bg-[#0c0c0c]');
   
 }

  return (
    <nav className="h-16 border-b dark:border-b-neutral-800 w-full flex items-center">
      <div className="w-full mx-12 flex items-center justify-between">
        <div>
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
    </nav>
  );
}

export default Nav