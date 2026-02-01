import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 w-full flex-nowrap  mt-15'>
        {data && data.tasks.map((elem, idx) => {
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if (elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if (elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if (elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList 