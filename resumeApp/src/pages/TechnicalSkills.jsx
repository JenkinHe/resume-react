import React, { useContext } from 'react'
import TechSkillsCard from '../components/TechSkillsCard'
import { useEffect } from 'react';
import {GlobalContext} from '../context/GlobalContext.jsx';


export default function TechnicalSkills() {

  const {technicalSkills} =useContext(GlobalContext);


  
  // useEffect(()=>{
  //   console.log(technicalSkills[0]);
  //  },[])
  return (// Modal Popup Github APi
    <div>
      {
       technicalSkills.map((item)=>
       <div className='m-4'>
        <TechSkillsCard skillItem={item}/>
        </div>
       )
      }
      
    </div>
  )
}
