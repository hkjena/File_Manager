import React, { useContext } from "react";
import FoldersContext from "../context/folders-context";

import ReactTooltip from "react-tooltip";

const AddFolder = () => {
  const { handleToogle } = useContext(FoldersContext);
  return (
    <>
      <img
        src="https://img.icons8.com/cute-clipart/100/000000/add-folder.png"
        onClick={handleToogle}
        alt="add folder icon"
        data-tip
        data-for="registerTip"
      />
      <ReactTooltip id="registerTip" place="bottom" effect="solid">
        New Folder
      </ReactTooltip>
    </>
  );
};
export default AddFolder;
