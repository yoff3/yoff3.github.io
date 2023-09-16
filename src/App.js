import './App.css';
import React, { useState } from 'react';
import files from './examp.json';
import { DirectoryTree } from "./DirectoryTree"
import { FolderContent } from "./FolderContent"


export function App (){
  const [filesData, setFilesData] = useState([])
  const [burgerMenuState, setBurgerMenuState] = useState(false)
  const [catalogState, setCatalogState] = useState(false)

  function getFile(currentDirectoryFiles){
    setFilesData(currentDirectoryFiles)
    //console.log(filesData)
  }

  function toggleBurgerMenu(){
    if(burgerMenuState){
      setBurgerMenuState(false)
    }else{
      setBurgerMenuState(true)
    }
    setCatalogState(!catalogState)
  }

  return (<main className="catalog-page">
            <aside className="burgerMenu" onClick={toggleBurgerMenu}>{catalogState? "Hide Menu": "Open Menu"}</aside>
            <section className={"derictoryTreeContainer "  + (burgerMenuState ? "showDiretoryTree" : "hideDirectoryTree")} >
              <DirectoryTree data={files[0]} 
                    takeFile={getFile}
                    />
            </section>
            <section className="contentContainer"><FolderContent data={filesData}/></section>
          </main>)
};


export default App;
