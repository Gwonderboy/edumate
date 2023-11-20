/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./tabs.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addAssignment } from "../../api/teacherApi";

const initialState = {
  title: "",
  description: "",
  level: "100",
};

function AddAssignment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAssignment = async (event: any) => {
    try {
      event.preventDefault();
      const payload = {
        ...formData,
      };
      const addResponse: any = await AddAssignment(payload);
      console.log(addResponse.data);
      navigate("/addassignment");
      toast(addResponse.data.message);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error(`Internal Server Error`);
      } else {
        toast.error(`Error, ${error.message}`);
      }
    }
  };
  return (
    <div className="container">
      <h3>Add Assignment</h3>

      <form onSubmit={handleAssignment}>
        <label>Title</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />
        <label>Level</label>
        <br />
        <select
          className="input-fields"
          name="level"
          onChange={inputChange}
          value={formData.level}
        >
          <option value="100L">100L</option>
          <option value="200L">200L</option>
          <option value="300L">300L</option>
        </select>
        <br />
        <br />
        <label>Question</label>
        <br />
        <textarea className="textarea"></textarea>
        <br />
        <br />
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default AddAssignment;
