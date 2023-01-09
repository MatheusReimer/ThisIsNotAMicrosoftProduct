import React from 'react'
import { Tab } from '@headlessui/react'
import categories from '../utils/Category'
import courses from "../utils/courses.json"
import { Course } from '../types'
import Product from './Product'
import { ArrowRightIcon } from '@heroicons/react/24/solid'



function Courses() {

  const showProducts = (category:number)  =>{
    let arrOfProductsInSelectedCategory:Course[] = []
    courses.forEach(element => {
      if(element.category===category){
        arrOfProductsInSelectedCategory.push(element)
      }
    });
    return arrOfProductsInSelectedCategory
  }

  return (

    
    <section className=''>
        <div className='justify-center flex text-4xl font-bold text-white w-full'>
            <h1 className='mt-5'>Recent Projects</h1>
        </div>
        <div className='mt-8'>
      
        <Tab.Group >
            <Tab.List className="flex justify-center   "    >
              {categories.map((category) => (
                <Tab
                  
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
              <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 ">
              <Tab.Panel className="tabPanel">
                <Product courses={showProducts(1)}></Product>
              </Tab.Panel>
              <Tab.Panel className="tabPanel">
                <Product courses={showProducts(2)}></Product>
              </Tab.Panel>
              <Tab.Panel className="tabPanel">
                <Product courses={showProducts(3)}></Product>
              </Tab.Panel>
              <Tab.Panel className="tabPanel">
                <Product courses={showProducts(4)}></Product>
              </Tab.Panel>
              <Tab.Panel className="tabPanel">
                <Product courses={showProducts(5)}></Product>
              </Tab.Panel>
            </Tab.Panels>
            
       </Tab.Group>
        </div>
        <div className='w-screen justify-center items-center flex visible md:invisible '>
          <div className=' flex  justify-evenly   bg-gradient-to-r from-[#07b92e] to-[#32FF0A] w-[200px] rounded-full text-center mb-5 font-semibold text-white cursor-pointer'>
            <h1>Learn More</h1>
          </div>
        </div>

    </section>
  )
}

export default Courses