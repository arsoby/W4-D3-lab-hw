import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function Effect() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(result=>{
            setData(result.data)
        })
    },[])

  return (
    <div>Effect
        
    <p>
        
        <ul>
            <li>
                
            </li>
        </ul>
    </p>
    </div>
  )
}

export default Effect