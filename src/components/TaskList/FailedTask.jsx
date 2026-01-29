import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='shrink-0 h-full w-[24%] bg-red-400 rounded-xl p-8'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 font-bold'>{data.category}</h3>
                <h4 className='font-semibold'>{data.taskDate}</h4>
            </div>
            <h1 className='mt-7 text-4xl font-extrabold '>{data.taskTitle}</h1>
            <p className='mt-4 text-xl font-medium'>{data.taskDescription}</p>
            <div>
                <button className='bg-red-600 px-3 py-2 rounded-lg font-semibold mt-5'>Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask