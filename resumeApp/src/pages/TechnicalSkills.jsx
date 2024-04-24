import React, { useContext, useState } from 'react'
import TechSkillsCard from '../components/TechSkillsCard'
import { useEffect } from 'react';
import {GlobalContext} from '../context/GlobalContext.jsx';
import CustomModalPopup from '../components/CustomModalPopup.jsx'


export default function TechnicalSkills() {
  const [showModalPopup,setShowModalPopup] =useState(false);
  const [displayedSkill,setDisplayedSkill] =useState({});

  const {technicalSkills} =useContext(GlobalContext);

  function handleOpen(item){
    setDisplayedSkill(item)
    setShowModalPopup(true)
  }

  function onClose(){
    setShowModalPopup(false)
    setDisplayedSkill({})
  }

  
  
  return (//Github APi
    <div className='flex flex-wrap justify-center'>
      {showModalPopup?
      <CustomModalPopup item={displayedSkill} onClose={onClose}/>
       :technicalSkills.map((item)=>
       <button key={item.name} onClick={()=>handleOpen(item)}>
        <div className='m-4'>
        <TechSkillsCard skillItem={item}/>
        </div>
       </button>
       
       )
      }
      
    </div>
  )
}
