import axios from "axios";
import { API_ENPOINT_URL } from './env';

axios.defaults.baseURL = 'API_ENPOINT_URL'

export default axios;