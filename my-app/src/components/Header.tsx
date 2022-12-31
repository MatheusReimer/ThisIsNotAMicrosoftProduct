import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import BlackLogo from "../images/blacklogo.png";

function Header() {
  return (
    <header className='flex pt-2 sticky h-[6vh]'>
        <div className='w-[30vw] '>
            <img src={BlackLogo} alt="" className='w-[25px] h-[25px] mr-4 ml-4 cursor-pointer'/>
            </div>
        <div className='w-[25vw] justify-end flex'>

            <a className='linksLeft'>Plans</a>
            <a className='linksLeft'>Cases</a>
            <a className='linksLeft'>Microsoft University</a>
        </div>
        <div className='flex justify-end w-[45vw]'>
            <a className='linksRight'>Login</a>
            <h1 className='pr-3 pl-3 pt-1 font-poppins invisible lg:visible text-gray-600'>|</h1>
            <a className='linksRight'>Register</a>
            <Bars3BottomRightIcon className='w-[55px] h-[55px] visible cursor-pointer lg:invisible pr-4'/>
        </div>
        
    </header>
  )
}

export default Header