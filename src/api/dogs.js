import axios from "../helpers/axiosConfig"

async function fetchAllBreeds(){
  const response = await axios.get("/breeds/list/all")
  return response
}

export default {
  fetchAllBreeds
}