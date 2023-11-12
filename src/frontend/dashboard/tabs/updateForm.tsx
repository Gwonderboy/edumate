import React from "react";
import "./tabs.css";

function UpdateForm() {
  return (
    <div className="container">
      <h3>Update Profile</h3>
      <form>
        <label>First Name</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />

        <label>Surname</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />

        <label>Email</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />

        <label>Password</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />

        <label>Level</label>
        <br />
        <select className="input-fields">
          <option value="100L">100L</option>
          <option value="200L">200L</option>
          <option value="300L">300L</option>
        </select>
        <br />
        <br />
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default UpdateForm;
