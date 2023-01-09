import developer from "../dev.svg"

function Banner() {
  return (
    <div className='sticky top-0 mx-auto flex-col flex h-screen max-w-[1350px] items-center justify-between px-8 md:flex-row sm:flex-col '>
        <div className='p-4 '>
            <h1 className='text-4xl bg:text-6xl font-semibold  md:text-6xl sm:text-4xl'>
                <span className='block bg-gradient-to-r  from-[#07b92e] to-[#32FF0A] bg-clip-text text-transparent'>Hello World!</span>
                <span className='block '>Welcome To</span>
                <span className='block '>My Developer</span>
                <span className='block '>Portfolio</span>
            </h1>
            <div className='pt-5 sm:pt-10'>
                <button className='text-1xl p-3 bg-gradient-to-r from-[#07b92e] to-[#32FF0A] rounded text-white cursor-pointer font-bold'>
                    <a href='#section2'>Learn More</a>
                </button>
            </div>
        </div>
        <div className='p-4'>
            <img src={developer} alt="" className='lg:w-[700px] md:w-[400px] sm:w-[400px] w-[400px]' />
        </div>
    </div>
  )
}

export default Banner