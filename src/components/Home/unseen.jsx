import React from 'react'

function Unseen() {
  return (
    <div>
       <div className='w-full text-[#4D4D4D] bg-white my-8 '>
        <div className='w-[100%]  mb-5 md:w-[95%] lg:w-[90%] xl:w-[85%] flex gap-[2%] mx-auto items-center flex-col md:flex-row'>
            <div id='left' className='w-[50%] sm:w-[40%]'>
                <img src="/image23.svg" alt="" className='w-full h-full'/>
            </div>
            <div id='right' className='w-[90%] md:w-[65%] lg:w-[55%] py-2 '>
                <div className='text-[#4D4D4D] text-[30px] font-bold py-2'>How to design your site footer like we did</div>
                <p className=' my-2'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

                <button className='bg-[#4CAF4F] rounded-[4px] py-[10px] px-[20px] text-white my-2'>
                    Learn More
                </button>
            </div>
        </div>

    </div>
  
    </div>
  )
}

export default Unseen