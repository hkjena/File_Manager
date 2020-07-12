import React, { useState } from "react";
import uuid from "react-uuid";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import AddFolder from "./components/AddFolder";
import ModalComponent from "./components/Modal";
import Breadcrumbcomponent from "./components/Breadcrumb";
import MainFolder from "./components/MainFolder";
import FoldersContext from "./context/folders-context";

const App = () => {
  const [show, setShow] = useState(false);
  const [folders, setFolders] = useState([]);
  const [currentPath, setcurrentPath] = useState("Home");

  const handleToogle = () => setShow(!show);

  const handelClick = (paths, i) => {
    setcurrentPath([...paths].slice(0, i + 1).join("/"));
  };

  const onFormSubmit = data => {
    if (data.trim() === "" || data === "") return;
    setFolders([
      ...folders,
      { name: data.trim(), id: uuid(), path: currentPath }
    ]);
  };

  const handelnewFolder = folderName => {
    setcurrentPath(`${currentPath + "/"}${folderName}`);
  };

  const paths = currentPath.split("/");
  const index = paths.length - 1;

  return (
    <FoldersContext.Provider
      value={{
        index,
        paths,
        handelClick,
        folders,
        currentPath,
        handelnewFolder,
        handleToogle,
        show,
        onFormSubmit
      }}
    >
      <Breadcrumbcomponent />
      <MainFolder />
      <AddFolder />
      <ModalComponent />
    </FoldersContext.Provider>
  );
};

export default App;
