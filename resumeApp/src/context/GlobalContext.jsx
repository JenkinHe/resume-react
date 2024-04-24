import { createContext,useState } from "react";


export const GlobalContext =createContext(null);




export default function GlobalContext({children}) {
    const [technicalSkills, setTechnicalSkills] = useState([]);


    return <GlobalContext.Provider value={{technicalSkills,setTechnicalSkills}}>{children}</GlobalContext.Provider>

  
}
