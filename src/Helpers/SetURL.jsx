
import { url } from "../Url";
export const SetURL = async (name) => {

  const URL = await `${url}/SYSTEM/Downloadfile/${name}`;
 
    return await URL;
};


