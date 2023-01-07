import axios from 'axios';
import { api } from '../constants';

// Cấu hình api base
// URL base và các cấu hình call api cho axios

//Export default thì ko nên đôi khi import thì mình ko biết là đang import cái nào
export default axios.create({
    //baseURL: 'https://intro-to-software-be.bagang.ai',
    baseURL: api.prod,
});

//Export const thì sẽ lấy đúng cái tên khi import ở các component khác
export const axiosPrivate = axios.create({
    baseURL: api.prod,
    headers: { "Content-Type": "application/json" },
  });

// suggest: configHttp.js