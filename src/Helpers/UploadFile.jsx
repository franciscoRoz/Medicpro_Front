import axios from "axios";
import { url } from "../Url";
export const UploadFile = async (file) => {
  const Header ={
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
      'Content-Type': 'multipart/form-data',
      maxBodyLength: "Infinity",
    },
  }
  const URL = `${url}/SYSTEM/UploadFile`;
  const formData = new FormData();
  formData.append('file', file);
 
  try {
    const response = await axios.post(URL, file, Header);
    
    return await response.data;
   
  } catch (error) {
   
    return window.location.replace(`/paginaError`)
  }
};
