import React from "react";
import "./Contact.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Contact;
