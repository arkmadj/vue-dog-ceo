import api from "../../api";

const state = {
	dogs: {
		breeds: {},
		all: [],
		selectedBreed: [],
	},
};

const getters = {
	breeds: (state) => state.dogs.breeds,
	dogs: (state) => state.dogs.all,
	selectedBreed: (state) => state.dogs.selectedBreed,
};

const actions = {
	async fetchAllBreeds({ commit }) {
		try {
			const response = await api.dogs.fetchAllBreeds();
			const { status, message } = response.data;
			commit("FETCH_ALL_BREEDS", message);
		} catch (error) {
			console.log(error);
		}
	},
	async fetchDogs({ commit }) {
		try {
			const response = await api.dogs.fetchDogs();
			const { status, message } = response.data;
			commit("FETCH_DOGS", message);
		} catch (error) {
			console.log(error);
		}
	},
	async fetchBreed({ commit }, breed) {
		try {
			const response = await api.dogs.fetchBreed(breed);
			const { status, message } = response.data;
			commit("FETCH_BREED", message);
		} catch (error) {
			console.log(error);
		}
	},
};

const mutations = {
	FETCH_ALL_BREEDS(state, message) {
		state.dogs.breeds = message;
	},
	FETCH_DOGS(state, message) {
		state.dogs.all = message;
	},
	FETCH_BREED(state, message) {
		state.dogs.selectedBreed = message;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
