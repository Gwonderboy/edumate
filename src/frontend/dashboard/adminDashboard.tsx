import { Tab } from "react-bootstrap/";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../dashboard/navbar.css";
import React from "react";
function Dashboard() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        eligendi doloremque et, vero quasi delectus in aspernatur deleniti?
        Aspernatur eos veniam mollitia earum sunt architecto sed enim animi
        saepe in.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}
export default Dashboard;
