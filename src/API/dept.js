import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;


export const getDepts = async () => {
  try {
    const depts = await axios.get(`${baseUrl}/dept`);
    return depts;
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { error: true, message: "An unexpected error occurred" };
  }
};
export const getAllAssets = async (dept) => {
  try {

    const assets = await axios.get(`${baseUrl}/dept/asset/${dept}`);
    return assets;
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { error: true, message: "An unexpected error occurred" };
  }
};

export const getAllEmployee = async (dept) => {

  try {

    const employee = await axios.get(`${baseUrl}/dept/employee/${dept}`);
    return employee;
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { error: true, message: "An unexpected error occurred" };
  }
};

export const createDept = async (formData) => {
  try {
      console.log(formData,'api')
    const newDept = await axios.post(`${baseUrl}/dept`,formData);
    return newDept;
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { error: true, message: "An unexpected error occurred" };
  }
};


