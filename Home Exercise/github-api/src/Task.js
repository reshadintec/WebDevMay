export const Task = (props) => {
  return (
      <div className="task">
          <h2>{props.id}:{props.taskName}</h2>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
  )
}