import React, { useState } from "react";
import { DropDown } from "components/dropdown";
import "./App.css";

const App = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (): void => setShow(!show);

  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <DropDown show={show} handleShow={handleShow} />
      </div>
    </div>
  );
};

export default App;
