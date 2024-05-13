import React, { createContext, useEffect, useState, useRef } from "react";

export const LinkagemContext = createContext();

export const LinkagemProvider =({children})=>{
    const [pagina, setPagina] = useState('home');
    const [stack, setStack] = useState('front');
    const clickHome = useRef();
    

    useEffect(()=>{
      clickHome.current.click();
    }, []);
  
    useEffect(() => {
      const windowsize = window.innerWidth;
      const getSeta = document.getElementById('setaImg');
  
      switch (pagina) {
        case 'home':
          if(windowsize>768){
          getSeta.style.left = '12.2ch';
          }else{
            getSeta.style.left = '6.2ch';
          }
          break;
        case 'projetos':
          if(windowsize>768){
          getSeta.style.left = '30ch';
          }else{
            getSeta.style.left = '15ch';
          }
          break;
        default:
          if(windowsize>768){
          getSeta.style.left = '49ch';
          }else{
            getSeta.style.left = '24ch';
          }
          break;
      }
    }, [pagina]);
    return <LinkagemContext.Provider value={{pagina, setPagina, clickHome, stack, setStack}}>{children}</LinkagemContext.Provider>
}