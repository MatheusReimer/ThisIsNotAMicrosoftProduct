import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { Course, ListOfCourses } from '../types';
import { Grid } from '@mui/material';


function Product({courses}:ListOfCourses) {
    return (
          <Grid container  rowGap={5} justifyContent="center">
          {courses.map((course)=>(
            <div className="flex h-fit w-[320px] select-none flex-col  space-y-3 rounded-xl ml-5 mr-5 bg-[#35383C] p-8 md:h-[370px] md:w-[400px] md:p-10 text-white">
            <h1 className='text-2xl font-thin place-self-center'>{course.title}</h1>
            <img src={course.thumb} alt={course.description} className=" h-[200px] object-contain place-self-center"></img>
            <div className='flex justify-between'>
              <div className='w-[80%]'>
                <h2 className=' first-letter:capitalize place-self-center  font-extralight'>{course.description}</h2>
                <h2 className=' font-extralight'>{course.price}</h2>  
              </div>
              
              <div className='bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-12 h-12 cursor-pointer items-center justify-center flex'>
                <ShoppingCartIcon className='h-6 w-6'></ShoppingCartIcon>
              </div>
            </div>

            </div>

          ))}
         </Grid>
      );
}

export default Product