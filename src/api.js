// src/api/quicksellAPI.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.quicksell.co/v1/internal',
});

export default instance;
