export function FolderContent({data}){
    const noFilesFound = "There is no files in the current directory"
    
    return <table className="fileInfoTable">
            <thead className="fileInfoHeader">
              <tr>
                <th className="fileName">File name</th>
                <th className="fileSize">Size</th>
                <th className="fileTime">Last Modification</th>
              </tr>
            </thead>
            <tbody>
              {data.filter(derictory => derictory.type === "file").length === 0 &&  
                <h3 className="centeredLocated">{noFilesFound}</h3>}
              {data.filter(derictory => derictory.type === "file").map(file => (
                  <tr className="fileInfo fileRowColor" key = {crypto.randomUUID()}>
                    <td className="fileName">{file.name}</td>
                    <td className="fileSize">{file.size}</td>
                    <td className="fileTime">{file.time}</td>
                  </tr>))}
            </tbody>
          </table>
  };
  