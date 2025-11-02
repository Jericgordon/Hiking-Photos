import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AddPostModal from "./components/pages/AddPostModal.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <AddPostModal />
  </StrictMode>
);
