import { useState } from "react"
import { useDispatch,useSelector} from 'react-redux'
import { login, logout } from "../features/userSlice"
export const Login = () =>{

const [newUserName,setNewUseRname]=useState("")
const dispatch = useDispatch() //dispacth means to send off to a destination or for a purpose.
const username = useSelector((state: any) => state.user.value.username);
    return (
        <div>
            <h1>{username}</h1>
           <h1> this is the login page </h1>
           <input type="text" onChange={(e)=>{setNewUseRname(e.target.value)}}/>
           <button onClick={()=>{ dispatch(login({username:newUserName}))}}>Submit</button>
           <button onClick={()=>{dispatch(logout())}}>Logout</button>
        </div>
    )
}






