import React, { useContext } from "react";
import FoldersContext from "../context/folders-context";
import { Modal, Button, Form } from "react-bootstrap";

const ModalComponent = () => {
  const { show, handleToogle, onFormSubmit } = useContext(FoldersContext);

  const textInput = React.createRef();

  const handelSubmit = e => {
    e.preventDefault();
    handleToogle();
    onFormSubmit(textInput.current.value);
  };

  return (
    <>
      <Modal
        show={show}
        size="md"
        dialogClassName="modalwidth"
        centered
        onHide={handleToogle}
      >
        <Modal.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Control
              className="mt-4"
              type="text"
              placeholder="Folder Name"
              maxLength="30"
              ref={textInput}
              required
            />
            <Button type="submit" variant="primary" className="mt-4 mb-2" block>
              Create Folder
            </Button>
          </Form>
          <div className="d-flex justify-content-center">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-exclamation-circle mt-1"
              fill="orange"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <p className="text-muted ml-2">
              Folder name should be less than 30 character
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
