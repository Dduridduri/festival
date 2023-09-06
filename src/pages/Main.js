import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import dataList from './../data/data'
import { NavLink } from 'react-router-dom'

const Content = styled.div`
   background-color: ${(props) => props.theme.colors.BgColor};
   width: 100%;
   padding: 120px 0% 50px 00%;
   overflow: hidden;

`

const ContentWrap = styled.div`
max-width: 1200px; 
margin: 0 auto;
padding: 0 2%;
display: flex;
flex-wrap: wrap;
gap: 20px 1.2%;
`
const ContentItem = styled.div`
background: #fff;
flex-basis: 32.5%;
border: 1px solid #ddd;
border-radius: 5px;
padding: 20px; box-sizing: border-box; cursor: pointer;
white-space: break-spaces;//줄이 길어지면 자동으로 줄바꿈
img{width:100%; display: block; margin-bottom:24px;}
h3{margin-bottom:24px;}
li{line-height:2; margin-bottom:6px;}
@media screen and (max-width: 1200px) {
  flex-basis: 49%;
}
@media screen and (max-width: 640px) {
  flex-basis: 100%;
}
`

function Main() {

  const [data, setData] = useState(dataList);

  const list = 12;
  const [page,setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);
  const pagination = 5;
  const totalPage = Math.floor(totalCnt / list);

  useEffect(()=>{
    // axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=${page}&numOfRows=10&resultType=json`)
    // .then(function(res){
    //   console.log(res)
    // })
    console.log(data)

  },[])


  return (
    <>
    <Content>
     <ContentWrap>
      {
        data.map((e,i)=>{
          return(

            <ContentItem key={i}>
              <NavLink to={`detail/${e.UC_SEQ}`}>
              <h3>{e.TITLE}</h3>
              <img src={e.MAIN_IMG_THUMB} alt={e.MAIN_TITLE} />
              <ul>
                <li>구군 : {e.GUGUN_NM}</li>
                <li>운영 기간 : {e.USAGE_DAY_WEEK_AND_TIME}</li>
                {
                  e.MIDDLE_SIZE_RM1 !== "" &&
                <li>편의 시설 : {e.MIDDLE_SIZE_RM1}</li>
                }
                {
                  e.USAGE_AMOUNT=== "-" ? "이용요금 : 무료" : `이용요금 : ${e.USAGE_AMOUNT}`
                
                }
                <li>교통편 : {e.TRFC_INFO}</li>
                {
                  e.MAIN_PLACE !=="" &&
                  <li>주요장소 : {e.MAIN_PLACE}</li>
                }
              </ul>
              </NavLink>
            </ContentItem>

          )
        })
      }

     </ContentWrap>
    </Content>    
    </>
  )
}

// https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=F4HReuhYmxck7Agay6kme%2FssSgxLYfYdyU%2BaeaEyfyrf45UEIwiubgARf6q%2FdZEsoTkXLqnFK%2FdjNuFa5dk6Eg%3D%3D&pageNo=1&numOfRows=10&resultType=json

export default Main