import axios from 'axios';

import {API_BASE_URL} from "@/env"

class serviceApi {
  url = "";
  // GENERATE BASE URL
  service() {
    axios.defaults.baseURL = `${API_BASE_URL}/`;
    return this;
  };

  // APPEND URL TO BASE API_BASE_URL
  appendToBase(url) {
    return (this.url += url);
  }

  // GET REQUSET
  async fetch(url) {
    try {
      let response = axios.get(this.appendToBase(url));
      this.url = ""
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export const $serviceApi = new serviceApi();