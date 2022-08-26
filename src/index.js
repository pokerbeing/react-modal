import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
}
function App() {
  const [modalShown, toggleModal] = React.useState(false);
  return (
    <div className="App">
      <h1>Modal Test</h1>
      <p>modalShown: {modalShown.toString()}</p>
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        Toggle Modal
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <h1>Look! I'm inside the modal!</h1>
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
