// import useContext hook
import React,{useContext} from 'react'
// import Database context
import Database from './context/index'
import GrandChild from './GrandChild'

function ChildComponent() {
    // use useContext hook to access context
    // const [myStr,Numbers,myObj,isUserLoggedIn,EventHandler,users] = useContext(Database)
  return (
    <div>
        <h1>ChildComponent.js</h1>
        {/* {
            // display context values
            console.log(myStr,Numbers,myObj,isUserLoggedIn,users)   
        }
        {
            EventHandler()
        } */}

        <GrandChild/>
    </div>
  )
}

export default ChildComponent