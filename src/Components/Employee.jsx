import React,{useState,useEffect} from 'react'

export const Employee = () => {
    const [list,setlist]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3004/employees`)
         .then(res=>res.json())
        .then(data=>setlist(data))
      },[])

  return (
    <div className='container'>
      {
        list.map((ele)=>{
              return (
                  <div>
                    <h1>{ele.Name}</h1>
                    <p>{ele.age}</p>
                    <p>{ele.gender}</p>
                  </div>
              )
          })
      }
    </div>
  )
}
