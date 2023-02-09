import { axios } from "../helpers/axiosConfig";

async function fetchAllBreeds() {
	const response = await axios.get("/breeds/list/all");
	return response;
}

async function fetchDogs(){
  const response = await axios.get("/breeds/image/random/50")
  return response
}

async function fetchBreed(breed){
  const response = await axios.get(`/breed/${breed}/images`)
  return response
}


export default {
	fetchAllBreeds,
  fetchDogs,
  fetchBreed
};
