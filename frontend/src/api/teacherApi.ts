/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addAssignment = async (body: any) => {
  try {
    const response = await axios.post("/user/addassignment", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addScore = async (body: any) => {
  try {
    const response = await axios.post("/user/addscore", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addCourseMaterial = async (body: any) => {
    try {
      const response = await axios.post("/user/addcourse", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };