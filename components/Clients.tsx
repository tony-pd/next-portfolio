import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards'
import React from 'react'

const Clients = () => {
  return (
     <div className="py-20 w-full" id="testimonials">
      <h1 className="heading">
        Kind words from{" "}
        <span className="text-purple-300">satisfied Clients</span>
      </h1>   
      <div className="flex flex-col items-center">
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'         
            />
        </div>    
         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-45 max-w-24 md:max-h-10 max-h-4 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  //className="md:w-30 w-15"
                />      
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
     </div>
  )
}

export default Clients