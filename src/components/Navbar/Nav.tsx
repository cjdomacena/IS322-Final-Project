import {useLocation} from 'react-router-dom'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDarkMode } from '../../redux/ThemeSlice'
type Props = {}

const Nav = (props: Props) => {
  const location = useLocation();
  let currentLocation = location.pathname.replace("/", "")
  currentLocation = currentLocation.replace("-", " ");
 const dispatch = useAppDispatch();
 const {isDarkMode} = useAppSelector(state => state.theme)

 const handleToggle = () => {
	 dispatch(toggleDarkMode())
 }

  return (
    <nav className="h-16 border-b dark:border-b-neutral-800 w-full flex items-center">
      <div className="w-full mx-12 flex items-center justify-between">
        <div>
          <h1 className='capitalize font-bold dark:text-neutral-50'>{currentLocation.length < 1 ? "Overview" : currentLocation}</h1>
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