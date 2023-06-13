import React from "react";
import "./Contact.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
import AskQuetion from "../../../components/AskQuetion/AskQuetion";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <Content />
        <AskQuetion />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Contact;
