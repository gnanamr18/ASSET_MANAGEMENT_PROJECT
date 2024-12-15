import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;


export const createEmployee= async (employeeData) => {
    try {
      const newEmployee = await axios.post(`${baseUrl}/employee`,employeeData);
      return newEmployee;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };