import React, { useContext, useState } from 'react'
import TechSkillsCard from '../components/TechSkillsCard'
import { useEffect } from 'react';
import {GlobalContext} from '../context/GlobalContext.jsx';
import CustomModalPopup from '../components/CustomModalPopup.jsx'
import GitHubDProfileDisplay from '../components/GitHubDProfileDisplay.jsx';


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

  
  
  return (
    <div className='flex flex-wrap justify-center '>
      {showModalPopup?
      <CustomModalPopup item={displayedSkill} onClose={onClose}/>
       :
       <div>
        <GitHubDProfileDisplay/>
        {
          technicalSkills.map((item)=>
          <button key={item.name} onClick={()=>handleOpen(item)}>
           <div className='m-10'>
           <TechSkillsCard skillItem={item}/>
           </div>
          </button>
          
          )
        }
        </div>
       
      }
      
    </div>
  )
}
