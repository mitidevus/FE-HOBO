import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost:2345',
});

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:2345",
    headers: { "Content-Type": "application/json" },
  });

// suggest: configHttp.js