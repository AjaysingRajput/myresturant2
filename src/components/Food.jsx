import React, { useState } from 'react'
import {data} from '../data/data'

const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)

    // Filter Type 
    const filterType =(category) =>{
       setFoods(
        data.filter((item)=>{
          return item.category === category;
        })
       )
    }
    // Filter by price
    const filterPrice = (price) =>{
      setFoods(
        data.filter((item)=>{
          return item.price === price
        })
      )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-4'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>

      {/* Filter Type */}
      <div>
      <p className='font-bold text-gray-700'>Filter Type</p>
      <div className='flex justify-between flex-wrap '>
        <button onClick={()=> setFoods(data)}  className=' m-1 border p-1 border-orange-600  text-orange-600 rounded-xl hover:bg-red-300 hover:text-white '>All</button>
        <button onClick={()=> filterType('burger')} className='m-1 border p-1 border-orange-600 rounded-xl text-orange-600  hover:bg-red-300 hover:text-white'>Burgers</button>
        <button onClick={()=> filterType('pizza')} className=' m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white '>Pizza</button>
        <button onClick={()=> filterType('salad')} className=' m-1 border p-1 border-orange-600  text-orange-600 rounded-xl  hover:bg-red-300 hover:text-white'>Salad</button>
        <button onClick={()=> filterType('chicken')} className=' m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white'>Chicken</button>
      </div>

      </div>

      {/* Filter Price */}
      <div>
      <p className='font-bold text-gray-700'>Filter Price</p>
      <div className='flex justify-between items-center max-w-[390px] w-full'>
        <button onClick={()=> filterPrice('$')} className='m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white'>$</button>
        <button onClick={()=> filterPrice('$$')} className='m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white'>$$</button>
        <button onClick={()=> filterPrice('$$$')} className='m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white'>$$$</button>
        <button onClick={()=> filterPrice('$$$$')} className='m-1 border p-1 border-orange-600 text-orange-600  rounded-xl hover:bg-red-300 hover:text-white'>$$$$</button>
      </div>
      </div>
      </div>

      {/* Display Foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
        {foods.map((element, index)=>(
          <div key={index} className='border shadow-lg hover:scale-105 cursor-pointer rounded-lg duration-300'>
            <img className='w-full h-[200px] object-cover rounded-t-lg'  src={element.image} alt={element.name} />
            <div className='flex justify-between px-2 py-2'>
              <p className='font-bold'>{element.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>{element.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Food
