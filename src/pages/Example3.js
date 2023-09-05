import React, { useState } from 'react'
import Example3_ from './../components/Example3'
import { styled } from 'styled-components'


const Content = styled.div`
display: flex;
ul{
  
 li{
  margin: 50px;
 }

  
}


`


function Example3() {
  let [data,setData] = useState(Example3_)
  console.log(data)
  let [animal, setAnimal] = useState("전체")

  const dataAnimal = data.filter(e =>{
    if(animal === "전체"){      
      return e.animal

    }else{
      return e.animal === animal

    }
  })

  const FilterAnimal = [...new Set(data.map(e => e.animal))];
  console.log(FilterAnimal)

  return (
    <>
    <Content>

    <ul>
      
     <li onClick={()=>setAnimal("전체")}>전체</li>
    {FilterAnimal.map((e,i)=>{
      return(
        
        <li onClick={()=>{setAnimal(e)}}>{e}</li>


        
        
        )
    })}
    </ul>
    <div>

    {
      dataAnimal.map((el,i)=>{
          return(
            <>           
              
            <p key={i}>{el.gender},{el.height}CM</p>
            
            
            </>
            
            )
          })
        }
        </div>
        </Content>
    </>
  )
}

export default Example3