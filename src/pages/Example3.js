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
  const [data,setData] = useState(Example3_);
  console.log(data)
  const [animal, setAnimal] = useState("전체");
  const [gender, setGender] = useState("전체");

  const dataAnimal = data.filter(e =>{

    let isAnimal = animal === "전체" || e.animal === animal;
    let isGender = gender === "전체" || e.gender === animal;
    return isAnimal && isGender



    // return (animal === "전체" ? e.animal : e.animal ===animal);
    // if(animal === "전체"){      
    //   return e.animal

    // }else{
    //   return e.animal === animal

    // }
  })

  const FilterAnimal = [...new Set(data.map(e => e.animal))];
  const FilterGender = [...new Set(data.map(e => e.gender))];
  console.log(FilterAnimal)

  return (
    <>
    <Content>

    <ul>
      
     <li  onClick={()=>setAnimal("전체")}>전체</li>
     {
      FilterGender.map((e,i)=>{
        return (
          <li key={i} onClick={()=>{setGender(e)}}>{e}</li>
        )
      })
     }
    {FilterAnimal.map((e,i)=>{
      return(
        
        <li key={i} onClick={()=>{setAnimal(e)}}>{e}</li>
        )
    })}
    </ul>
    <div>

    {
      dataAnimal.map((el,i)=>{
          return(
            <>           
              
              
            <p key={i}>{el.gender} - {el.height}CM</p>
            
            
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