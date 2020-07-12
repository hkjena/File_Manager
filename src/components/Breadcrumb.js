import React, { useContext } from "react";
import FoldersContext from "../context/folders-context";
import uuid from "react-uuid";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbcomponent = () => {
  const { index, paths, handelClick } = useContext(FoldersContext);
  return (
    <>
      {index > 0 && (
        <Breadcrumb>
          {index > 0 &&
            paths.map((path, i) => (
              <Breadcrumb.Item
                key={uuid()}
                active={index === i ? true : false}
                onClick={() => handelClick(paths, i)}
              >
                {path.length > 10 ? path.slice(0, 10) + "..." : path}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      )}
    </>
  );
};

export default Breadcrumbcomponent;
