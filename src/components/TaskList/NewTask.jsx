import React from 'react'

const NewTask = ({data}) => {
    
  return (
        <div className='shrink-0 h-full w-[24%] bg-blue-400 rounded-xl p-8'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 font-bold'>{data.category}</h3>
                <h4 className='font-semibold'>{data.taskDate}</h4>
            </div>
            <h1 className='mt-7 text-4xl font-extrabold '>{data.taskTitle}</h1>
            <p className='mt-4 text-xl font-medium'>{data.taskDescription}</p>
            <div>
                <button className='bg-green-500 px-4 py-2 rounded-lg font-bold mt-5 hover:bg-green-600'>Accept Task</button>
                <button className='bg-red-500 px-4 py-2 rounded-lg font-bold mt-5 hover:bg-red-700 ml-5'>Reject Task</button>
            </div>
        </div>
  )
}

export default NewTask