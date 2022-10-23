export const Task = (props) => {
  return (
      <div className="task">
          <h2
          style={{
            color: props.completed ? "blue" : "red" 
          }}
          >{props.id}:{props.taskName}</h2>
          <button onClick={()=> props.completeTask(props.id)}>Completed</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
  )
}