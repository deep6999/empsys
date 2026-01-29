import React from 'react'

const Taskcards = (props) => {
  return (
    <div className='flex justify-between gap-3 mt-15 screen'>
      <div className='bg-blue-400 px-6 py-9 rounded-lg w-[45%]'>
        <h2 className='text-5xl font-extrabold mb-2'>{props.data.taskCounts.newTask}</h2>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-green-400 px-6 py-9 rounded-lg w-[45%]'>
        <h2 className='text-5xl font-extrabold mb-2'>{props.data.taskCounts.completed}</h2>
        <h3 className='text-3xl font-semibold'>Completed Task</h3>
      </div>
      <div className='bg-yellow-400 px-6 py-9 rounded-lg w-[45%]'>
        <h2 className='text-black text-5xl font-extrabold mb-2'>{props.data.taskCounts.active}</h2>
        <h3 className='text-black text-3xl font-semibold'>Accepted Task</h3>
      </div>
      <div className='bg-red-400 px-6 py-9 rounded-lg w-[45%]'>
        <h2 className='text-5xl font-extrabold mb-2'>{props.data.taskCounts.failed}</h2>
        <h3 className='text-3xl font-semibold'>Failed Task</h3>
      </div>
      
        
    </div>
  )
}

export default Taskcards