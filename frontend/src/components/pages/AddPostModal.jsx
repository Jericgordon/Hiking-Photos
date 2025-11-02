import { useState } from 'react';
import ReactModal from "react-modal";

export default function AddPostModal() {
  console.log("Hello from React!");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Post
      </Button>
      <ReactModal show={show} onHide={handleClose}>
        <h2>Add a New Post</h2>
      </ReactModal>

      <h1>Index Page</h1>
    </>
  );
}
