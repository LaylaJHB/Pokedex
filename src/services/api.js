/*import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;
*/

import axios from "axios";
import { BASE_URL } from "../Constantes/urls";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
