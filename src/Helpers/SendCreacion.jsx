import axios from "axios";
import { url } from "../Url";
export const SendCreacion = async (Body) => {
  const Header ={
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
      maxBodyLength: "Infinity",
    },
  }
  const URL = `${url}/SYSTEM/GenerarAdquisiciones`;
 
console.log(URL);
 
  try {
    const response = await axios.post(URL, Body, Header);
    
    return await response.data;
   
  } catch (error) {
   
    return window.location.replace(`/paginaError`)
  }
};


