import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import React, { useState } from 'react';

export function DirectoryTree({data, takeFile}){
  const [showChildren, setShowChildren] = useState(false);  
  
  return  <ul className="catalog-list">            
            <li className="folderIcon" key={data.name}>
              <div onClick={() => {
                setShowChildren(!showChildren)
              }}>{showChildren ? <AiOutlineFolderOpen/> : <AiOutlineFolder/> }</div>
              <span onClick={()=>takeFile(data.contents)}>{data.name}</span>
            </li>           
            {showChildren &&
                data.contents &&
                data.contents.filter((child) => child.type === "directory").map(child =>
                  <DirectoryTree key={child.name} data={child} takeFile ={takeFile} />
              )}
          </ul>
};