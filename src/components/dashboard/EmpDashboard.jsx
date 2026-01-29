import React from 'react'
import Header from '../others/Header'
import Taskcards from '../others/Taskcards'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = (props) => {
  return (
    <div className='p-15 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Taskcards data={props.data}/>
        <TaskList data={props.data}/>

    </div>
  )
}

export default EmpDashboard