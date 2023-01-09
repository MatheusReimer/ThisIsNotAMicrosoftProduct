import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import logo from "../blacklogo.png"

function Header() {
  return (
    <header className='flex pt-2 sticky h-[6vh]'>
        <div className='w-[30vw] md:w-[45vw]'>
            <img src={logo} alt="" className='w-[50] h-[50px] mr-4 ml-4 cursor-pointer'/>
            </div>
        <div className='w-[15vw] justify-end flex'>

            <a className='linksLeft'>Gmail</a>
            <a className='linksLeft'>Github</a>
            <a className='linksLeft'>Linkedin</a>
        </div>
        <div className='flex justify-end w-[45vw] mr-4'>
            <a className='linksRight'>Contact-me</a>
        </div>
        
    </header>
  )
}

export default Header