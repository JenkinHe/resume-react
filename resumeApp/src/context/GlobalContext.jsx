import { createContext,useEffect,useState } from "react";
import { initialData } from "../data/initialData";


export const GlobalContext =createContext(null);




export default function GlobalState({children}) {
    const [technicalSkills, setTechnicalSkills] = useState(initialData.TechSkills);




    return <GlobalContext.Provider value={{technicalSkills,setTechnicalSkills}}>{children}</GlobalContext.Provider>

  
}
