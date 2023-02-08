import axios from "axios";

axios.defaults.baseURL = "https://dog.ceo/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

export { axios };
