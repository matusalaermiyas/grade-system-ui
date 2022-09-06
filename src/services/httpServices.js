import axios from "axios";
import { toast } from "react-toastify";
import auth from "./auth";

axios.defaults.headers.common["x-auth-token"] = auth.getToken();

axios.interceptors.response.use(null, (error) => {
  // Unexpected errors
  const expected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expected) toast.error("Unexpected error occured!");

  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
