import React from 'react'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleDarkMode } from '../../redux/ThemeSlice'
type Props = {}

const Nav = (props: Props) => {
 const dispatch = useAppDispatch();
 const {isDarkMode} = useAppSelector(state => state.theme)

 const handleToggle = () => {
	 dispatch(toggleDarkMode())
 }

  return (
    <nav className="h-16 border-b dark:border-b-neutral-800 w-full flex items-center justify-end">
      <div className="w-fit mx-12 ">
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