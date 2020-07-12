import React, { useContext } from "react";
import FoldersContext from "../context/folders-context";

import Folder from "./Folder";

const MainFolder = () => {
  const { folders, currentPath, handelnewFolder } = useContext(FoldersContext);
  return (
    <>
      {folders.length > 0 ? (
        <div>
          <p className="ml-2 mt-2 font-weight-bold">Folders</p>
        </div>
      ) : (
        <div>
          <p className="ml-2 font-weight-bold">
            To add a New Folder Click on Plus Sign
          </p>
        </div>
      )}
      {folders
        .filter(folder => folder.path === currentPath)
        .map(folder => (
          <Folder
            name={folder.name}
            key={folder.id}
            onnewFolder={handelnewFolder}
          />
        ))}
    </>
  );
};

export default MainFolder;
