import React, { useContext, useState } from 'react'
import TechSkillsCard from '../components/TechSkillsCard'
import { useEffect } from 'react';
import {GlobalContext} from '../context/GlobalContext.jsx';
import CustomModalPopup from '../components/CustomModalPopup.jsx'


export default function TechnicalSkills() {
  const [showModalPopup,setShowModalPopup] =useState(false);
  const [displayedModalName,setDisplayedModalName] =useState('');

  const {technicalSkills} =useContext(GlobalContext);

  function handleOpen(name){
    setDisplayedModalName(name)
    setShowModalPopup(true)
  }

  function onClose(){
    setShowModalPopup(false)
    setDisplayedModalName('')
  }

  
  
  return (// Modal Popup Github APi
    <div className='flex flex-wrap justify-center'>
      {showModalPopup?
      <CustomModalPopup name={displayedModalName} content={displayedModalName} onClose={onClose}/>
       :technicalSkills.map((item)=>
       <button key={item.name} onClick={()=>handleOpen(item.name)}>
        <div className='m-4'>
        <TechSkillsCard skillItem={item}/>
        </div>
       </button>
       
       )
      }
      
    </div>
  )
}
