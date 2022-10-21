const User = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h3>{props.email}</h3>
            <p>Stage of the loop and component</p>
        </div>
    )
}
export default User