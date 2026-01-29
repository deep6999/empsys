import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
        <div className='shrink-0 h-full w-[24%] bg-yellow-400 rounded-xl p-8 text-black'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 font-bold text-white'>{data.category}</h3>
                <h4 className='font-semibold'>{data.taskDate}</h4>
            </div>
            <h1 className='mt-7 text-4xl font-extrabold '>{data.taskTitle}</h1>
            <p className='mt-4 text-xl font-medium'>{data.taskDescription}</p>
            <div>
                <button className='bg-green-500 px-4 py-2 rounded-lg font-semibold mt-5 hover:bg-green-600'>Completed</button>
                <button className='bg-red-500 px-4 py-2 rounded-lg font-semibold mt-5 hover:bg-red-700 ml-5'>Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask