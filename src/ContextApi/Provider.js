import { getDepts } from "../API/dept";
import { useState, useEffect } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [depts, setDepts] = useState([]); // Use state to store departments

  const fetchDepts = async () => {
    try {
      const response = await getDepts();
      setDepts(response.data); // Update state with API response
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };
  useEffect(() => {
    fetchDepts();
  }, []);

  return (
    <Context.Provider value={depts}>
      {children} {/* This is where your app's components will be placed */}
    </Context.Provider>
  );
};

export { Provider };
