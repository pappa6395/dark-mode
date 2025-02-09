
import { ModeToggle } from '@/components/ModeToggle'
import React from 'react'

const page = async() => {
    
  
  return (

    <div>
        <div className='grid justify-center mt-6'>
          <div className='flex items-center justify-center gap-4'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl 
              font-semibold tracking-tight first:mt-0">
                  Dark / Light mode Toggle
              </h2>
              <ModeToggle/>
          </div>
        </div>
    </div>

  )
}

export default page