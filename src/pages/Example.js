import React, { useState } from 'react'
import Example_ from './../components/Example'
import { styled } from 'styled-components'

const Content = styled.div`
display: flex; justify-content: space-around;
`

function Example() {
  
  let [data,setData] = useState(Example_)
  let [job, setJob] = useState("전체");
//useState에서 앞에는 읽기전용 뒤에는 쓰기전용
  const dataFilter = data.filter(e =>{
    if(job === "전체"){      
      return e.job

    }else{
      return e.job === job

    }
  })

  const FilterJob = [...new Set(data.map(e => e.job))];
  console.log()
//중복을 제거하고 변수 나열
  return (
    <Content>
      <ul>
        <li onClick={()=>{setJob("전체")}}>전체</li>
        {
        FilterJob.map((e,i)=>{
          return(
            <li key={i} onClick={()=>setJob(e)}>{e}</li>
          )
        })
        
        }
      </ul>


      {/* {data.map((e,i,a)=>{
      return(
        <>
        <div key={i}>

        <p>{e.name}</p>
        <p>{i}</p>
        <p>{a[i].name}</p>

        </div>
        </>
      )
    })} */}

    {
      dataFilter.map((el,i)=>{
        return(
          
          <p key={i}>{el.name}</p>
        )
      })

    }
    </Content>
    // 리액트에서 출력은 무적권{} 앞쪽엔 변수명, 뒤쪽엔 키'값'
  )
}
//새로고침 안하고 데이터를 바꾸기위해서

export default Example