import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;



export const getissueAssets = async () => {
    try {
      const history = await axios.get(`${baseUrl}/issueAsset`);
      return history;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };

  export const issueAsset = async (assetId) => {
    try {
      const transaction = await axios.put(`${baseUrl}/issueAsset/${assetId}`);
      return transaction;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };

  export const returnAsset = async (assetId) => {
    try {
      const transaction = await axios.put(`${baseUrl}/returnAsset/${assetId}`);
      return transaction;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };