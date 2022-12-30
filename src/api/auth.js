import axios from 'axios';

// Cấu hình api base
// URL base và các cấu hình call api cho axios

//Export default thì ko nên đôi khi import thì mình ko biết là đang import cái nào
export default axios.create({
    baseURL: 'http://localhost:2345',
});

//Export const thì sẽ lấy đúng cái tên khi import ở các component khác
export const axiosPrivate = axios.create({
    baseURL: "http://localhost:2345",
    headers: { "Content-Type": "application/json" },
  });

// suggest: configHttp.js