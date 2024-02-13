import axios from "axios";
import { url } from "../Url";
export const GetAdquisiciones = async (Body) => {

  const URL = `${url}/SYSTEM/GetAdquisiciones`;
 

 
  try {
    const response = await axios.get(URL);
    
    return await response.data;
   
  } catch (error) {
   
    return window.location.replace(`/paginaError`)
  }
};


