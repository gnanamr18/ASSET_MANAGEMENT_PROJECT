import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;


export const createAsset = async (formData) => {
    try {
      const newAsset = await axios.post(`${baseUrl}/asset`,formData);
      return newAsset;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };

  export const scrapAsset= async (assetId) => {
    try {
      const scrapedAsset = await axios.put(`${baseUrl}/asset/${assetId}`);
      return scrapedAsset;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };