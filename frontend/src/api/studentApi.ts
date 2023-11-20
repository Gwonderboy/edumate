/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const viewAssignment = async (body: any) => {
  try {
    const response = await axios.post("/user/viewassignment", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const viewScore = async (body: any) => {
  try {
    const response = await axios.post("/user/viewscore", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const viewCourseMaterial = async (body: any) => {
    try {
      const response = await axios.post("/user/viewcourse", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };