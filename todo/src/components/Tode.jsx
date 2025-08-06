import React, { useState } from 'react'

function Tode() {

    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])

    const addItem = ()=>{
        if(task.trim === "")return
       
            setTodo([...todo,task])
            setTask('')
        
    }

    const Delete=(i)=>{
        const filtered = todo.filter((_,item)=>item !== i)
        setTodo(filtered)
    }
  return (
   <>

   <h1>TODO</h1>

   
    <input type="text" value={task} style={{padding:'3px',height:'20px' }} onChange={(e)=>{setTask(e.target.value)}} placeholder='add items' className='' />
    <button  style={{padding:'3px 4px',height:'30px',marginTop:'4px' }} onClick={addItem}>add</button>
 

   <div>
    <div>
       { todo?.map((d,i)=>(
            <h4 key={i} >{d} <span style={{marginLeft:'30px'}} onClick={()=>Delete(i)}>❌</span></h4>
            ))}
    </div>
   </div>
   
   </>
  )
}

export default Tode