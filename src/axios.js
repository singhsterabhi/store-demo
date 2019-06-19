import axios from "axios";

const instance = axios.create({
  baseURL: "https://mystore-b9872.firebaseio.com/"
});

export default instance;
