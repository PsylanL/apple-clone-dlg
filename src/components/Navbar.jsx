import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18}/>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem) =>(
              <div key={navItem} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                {navItem}
              </div>
            ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
//rafce to create fast structure
//items-baseline to align items at the baseline of the container
//max-sm:flex-1 to make the container take up the remaining space on the right