import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ActionButton.css";
import { SelectedPage } from "../types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="action-button"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
