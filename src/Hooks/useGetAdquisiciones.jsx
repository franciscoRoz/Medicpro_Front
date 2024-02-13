import { useState, useEffect } from "react";

import { GetAdquisiciones } from "../Helpers/GetAdquisiciones";

export const useGetAdquisiciones = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


  useEffect(() => {
    // Define una función asincrónica para llamar a la API y actualizar el estado
    const fetchData =  async() => {
      try {
        const datos =  await GetAdquisiciones();
        setState({
          data: datos,
          loading: false,
        });
      } catch (error) {
        window.location.replace(`/paginaError`)
      }
    };
    fetchData();
  }, []);

  return state;
};