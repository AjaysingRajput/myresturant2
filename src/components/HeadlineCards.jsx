import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] p-4 py-12 mx-auto grid md:grid-cols-3 gap-4 '>

      {/* Card */}
      <div className='rounded-xl relative cursor-pointer'>
        {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
             <p className='px-2'>Through 8/26</p>
             <button className='border-white bg-white cursor-pointer hover:bg-black hover:text-white text-black mx-2 p-1 rounded-full absolute bottom-4'>Order Now</button>
        </div>
        <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl ' src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card1" />
      </div>

      {/* Card 2*/}
      <div className='rounded-xl relative cursor-pointer'>
        {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
             <p className='px-2'>Added Daily</p>
             <button className='border-white bg-white text-black cursor-pointer hover:bg-black hover:text-white mx-2 p-1 rounded-full absolute bottom-4'>Order Now</button>
        </div>
        <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl ' src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card1" />
      </div>

      {/* Card 3*/}
      <div className='rounded-xl relative cursor-pointer'>
        {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Top</p>
             <p className='px-2'>Tasty Treats</p>
             <button className='border-white bg-white text-black cursor-pointer hover:bg-black hover:text-white mx-2 p-1 rounded-full absolute bottom-4'>Order Now</button>
        </div>
        <img className='w-full object-cover max-h-[160px] md:max-h-[200px] rounded-xl ' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card1" />
      </div>
      
    </div>
  )
}

export default HeadlineCards
