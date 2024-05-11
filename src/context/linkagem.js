import React, { createContext, useEffect, useState, useRef } from "react";

export const LinkagemContext = createContext();

export const LinkagemProvider =({children})=>{
    const [pagina, setPagina] = useState('home');
    const clickHome = useRef();

    useEffect(()=>{
      clickHome.current.click();
    }, []);
  

    useEffect(() => {
      const getSeta = document.getElementById('setaImg');
  
      switch (pagina) {
        case 'home':
          getSeta.style.left = '12.2ch';
          break;
        case 'projetos':
          getSeta.style.left = '30ch';
          break;
        default:
          getSeta.style.left = '49.5ch';
          break;
      }
    }, [pagina]);
    return <LinkagemContext.Provider value={{pagina, setPagina, clickHome}}>{children}</LinkagemContext.Provider>
}