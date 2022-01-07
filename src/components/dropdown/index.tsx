import React, { FC, MouseEventHandler } from "react";
import { DropDownList } from "../dropdownlist";

interface IDropDownProps {
  show: Boolean;
  handleShow: MouseEventHandler<HTMLButtonElement>;
}

const DropDown: FC<IDropDownProps> = ({ show, handleShow }) => {
  return (
    <>
      <button className="btn" onClick={handleShow}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {show && <DropDownList />}
    </>
  );
};

export { DropDown };
