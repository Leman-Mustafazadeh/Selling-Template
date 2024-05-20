import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../API'

const ProductsDetails = () => {
    const {id} = useParams()
    const [getData,setGetdata] = useState({
        imgSrc:'',
        name:'',
        title:''
    })
    useEffect(()=>{
        getOne(id).then((res)=>{
            setGetdata(res.data.data)
        })
    },[id])
    console.log(getData);
  return (
    <>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <img src={getData.imgSrc} alt="" />
        <h3>{getData.name}</h3>
        <h4>{getData.title}</h4>
    </div>
    </>
  )
}

export default ProductsDetails