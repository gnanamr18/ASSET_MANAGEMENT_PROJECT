import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAssetHistory = async (assetSymbol) => {
    console.log(assetSymbol,'api')
    try {
  
      const assets = await axios.get(`${baseUrl}/assetHistory/${assetSymbol}`);
      return assets;
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { error: true, message: "An unexpected error occurred" };
    }
  };