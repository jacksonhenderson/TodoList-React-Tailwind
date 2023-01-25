
import Edit from './Edit'


const ListTodo = ({newTask,func,getfunc}) => {
  return (
    <div className=' mb-2 rounded-lg'>
      
      {newTask.length ? newTask.map((item)=>{
        return(
          <Edit item ={item} newTask={newTask} func={func} key={item.id} getfunc={getfunc}/>
        )
      }) : "No Task"}
      </div>
  )
}

export default ListTodo