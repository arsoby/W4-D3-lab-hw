import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {
    const [firestName , setFirestName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
const api = "https://62d3e34acd960e45d44f7ccf.mockapi.io/LogIn"

const navigate = useNavigate()
const PostData = ()=>{
    if(firestName.length >=3 &&lastName.length>=3 ){
        axios.post(api,{
            firestName,
            lastName
        }).then(res=>{
            console.log(res);
            
        })
        navigate("/")
        axios.get("https://62d3e34acd960e45d44f7ccf.mockapi.io/LogIn")
    }else{
        alert("Please write correct information")
    }

}
  return (
    <div>
        <input placeholder='firest name' onChange={e =>{setFirestName(e.target.value)}}></input>
        <input placeholder=' last name' onChange={e =>{setLastName(e.target.value)}}></input>
        <button onClick={PostData}>logIn</button>
    </div>
  )
}

export default Post