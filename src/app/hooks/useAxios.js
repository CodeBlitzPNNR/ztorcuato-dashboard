import { useState } from 'react';
import axios from 'axios';

// Define las URLs base por ambiente
// https://goalgurusapiblito.vercel.app/user
// http://localhost:5500

const API_BASE_URLS = {
  dev: 'https://vercel-flax-xi.vercel.app',
  dev1: 'http://localhost:5500',
  int: 'https://api.int.example.com',
  qas: 'https://api.qas.example.com',
  prd: 'https://api.example.com',
  cli: 'https://api-zingueria-adaro-cp.vercel.app/api/clientes/',
  // Puedes agregar más ambientes aquí en el futuro
  // otroAmbiente: 'https://api.otroambiente.example.com',
};

function useAxios() {

  //axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    // Obtén el ambiente actual (puedes ajustar esto según tu configuración)
    const environment = process.env.REACT_APP_ENV || 'dev'; // Asegúrate de definir REACT_APP_ENV en tus scripts de inicio en el package.json

    if (!API_BASE_URLS[environment]) {
      throw new Error(`Ambiente no válido: ${environment}`);
    }
  
    const baseUrl = API_BASE_URLS[environment];
  
    const fetchData = async (
      endpoint, 
      method = 'get', 
      requestBody = null, 
      token = null) => {
      try {
        setLoading(true);
  
        const axiosConfig = {
          method,
          url: `${baseUrl}/${endpoint}`,
          headers: {
            'Content-Type': 'application/json',
            // Agrega el token JWT a la cabecera si está presente
            ...(token && { 'Authorization': `Bearer ${token}` }),
          },
        };
  
        if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
          axiosConfig.data = requestBody;
        }
  
        const response = await axios(axiosConfig);
  
        console.log("response: ", response.data);

        setData(response.data.body);
      } catch (error) {        
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    return { data, loading, error, fetchData };
}

export default useAxios;