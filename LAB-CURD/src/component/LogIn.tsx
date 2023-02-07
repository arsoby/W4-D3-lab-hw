import axios from "axios";
import React, { useEffect } from "react";
import  "./LogIn.css"
function LogIn() {
    useEffect(()=>{getInfo})
    const getInfo = ()=>{
        axios.get(api).then(result=>{
            console.log(result.data);
            setAllData(result.data)
            
        })
    }
    const [ allData,setAllData]= React.useState<any>()
    const [firstName , setFirstName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [phoneNumber , setPhoneNumber] = React.useState("")
const api = "https://63e228b7109336b6cb00e695.mockapi.io/personal"

const postInfo = ()=>{
   axios.post(api,
    {
        firstName,lastName,email,phoneNumber
    }).then(result=>{
        console.log(result);
        getInfo()
    })
}

  return (
    <div className="Page">
        <div className="LogIn-Inputs">

      <input type="text" placeholder="First Name" onChange={e=>{setFirstName(e.target.value)}} />
      <input type="text" placeholder="Last Name" onChange={e=>{setLastName(e.target.value)}} />
      <input type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
      <input type="text"  placeholder="Phone Number" onChange={e=>{setPhoneNumber(e.target.value)}}/>
      
      <button onClick={postInfo}> Send Info</button>
      <p>{allData}</p>
        </div>
        
    </div>
  );
}

export default LogIn;
