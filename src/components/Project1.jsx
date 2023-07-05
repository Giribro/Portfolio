import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./project1.module.css"
import { Link } from 'react-router-dom';

const Project1 = () => {
  let [content,setcontent]=useState([]);
  let[id,setid]=useState("")
  let[btn,setbtn]=useState("")

  useEffect(()=>{
    axios.get(`https://api.github.com/users${btn}`)
    .then((disp)=>{
      setcontent(disp.data);
      console.log("got the data");
      console.log(disp.data);
      setid(disp.login);      
    })
    .catch(()=>{
      console.log("NOT YET");
    })
},[btn]);

  let iddata=(e)=>{
    setid(e.target.value);
    console.log(e.target.value);
  }
  let searchdata=()=>{
    setbtn(id)
    
  }

  return (
    <div>
      <h1>Profile Cards <Link to="/project1"></Link></h1>
      <input type="text" value={id} onChange={iddata} />
      <button onClick={searchdata}>Search</button>
      <h1>{content.login}</h1>
      <div id={style.profile}>
        {content.map((x)=>{
              let user=()=>{
              alert(`friend request sent to ${x.iddata}`)
              }
        return(
        <div id ={style.cards} key={x.id} >
          
          <h6>NAME-{x.login}</h6>
          <img src={x.avatar_url}  alt=''/>
          <h4>id:{x.id}</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, dolor.</p>
          <button onClick={user}>ADD Frd</button>
          <button>Message</button>
        </div>
      )})
      }
        </div>
      </div>
  )
}

export default Project1;