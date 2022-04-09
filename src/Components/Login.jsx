import React, { useState } from 'react'

export const Login = () => {
    const [userName,setUserName]=useState()
    const [userPassword,setUserPassword]=useState()


function sendData()
{

    loadData(userName,userPassword)  
}


async function loadData(userName,userPassword)
{

    try {
        let obj={
            "password": userPassword,
            "username":userName
        }
    
        const res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });

    let response=await res.json();
    console.log(response);
    if(response.error==true)
    {
        alert(response.message)
    }
    else{
        alert("Welcome!") 
        window.location="dash.html"
        localStorage.setItem("token",response.token)
        localStorage.setItem("username")
    }
        
    } catch (error) {
        alert(error) 
    }
  

}




  return (
    <div>
    <input type="text" name="" id="" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
    <br/>
    <input type="text" name="" id="" placeholder='Password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
    <br/>
    <button onClick={sendData}>log in</button>
    </div>
  )
}
