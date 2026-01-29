import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 w-full flex-nowrap  mt-15'>
        {data && data.tasks.map((e, idx) => {
            if(e.NewTask){
                return <NewTask key={idx} data={e}/>
            }
            if (e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if (e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
            if (e.failed){
                return <FailedTask key={idx} data={e}/>
            }
        })}
    </div>
  )
}

export default TaskList 