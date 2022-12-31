import React from 'react'


function Banner() {
  return (
    <div className='sticky top-0 mx-auto flex-col flex h-screen max-w-[1350px] items-center justify-between px-8 md:flex-row sm:flex-col '>
        <div className='p-4'>
            <h1 className='text-4xl bg:text-6xl font-semibold leading-tight md:text-5xl sm:text-4xl'>
                <span className='block'>More Than A Hundred</span>
                <span className='block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'>Officially Certified</span>
                <span className='block '>Courses</span>
                <span className='block'>By Microsoft</span>
            </h1>
            <div className='pt-5 sm:pt-10'>
                <button className='text-1xl p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded text-white cursor-pointer font-bold'>
                    <a href='#section2'>Learn More</a>
                </button>
            </div>
        </div>
        <div className='p-4'>
            <img src="https://cdn.shopify.com/s/files/1/0484/7979/7401/products/Microsoft_Office_2021_Professional_Plus_32_64_Bit_Download_500x.webp?v=1655723576" alt="" className='lg:w-[500px] md:w-[400px] sm:w-[400px] w-[400px]' />
        </div>
    </div>
  )
}

export default Banner