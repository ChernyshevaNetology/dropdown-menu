import React, { useState, MouseEvent } from "react";

const dropDownListOptions: string[] = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "Log Out",
];

const DropDownList = () => {
  const [dropDownOption, setDropDownOption] =
    useState<undefined | string>(undefined);

  const highlightActiveOption = (event: MouseEvent<HTMLElement>): void => {
    setDropDownOption(event.currentTarget.dataset.name);
  };

  return (
    <ul data-id="dropdown" className="dropdown">
      {dropDownListOptions.map((link) => (
        <li
          className={dropDownOption === link ? "active" : ""}
          data-name={link}
          key={link}
          onClick={highlightActiveOption}
        >
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  );
};

export { DropDownList };
