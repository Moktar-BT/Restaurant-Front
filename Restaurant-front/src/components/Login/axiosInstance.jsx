// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081', // Updated to match the Spring Boot server port
});

export default instance;
