import api from "../../api";

const state = {
	dogs: {
		breeds: {},
		all: [],
		selected: {},
	},
};

const getters = {
	breeds: (state) => state.dogs.breeds,
	dogs: (state) => state.dogs.all,
};

const actions = {
	async fetchAllBreeds({ commit }) {
		try {
			const response = await api.dogs.fetchAllBreeds();
			const { status, message } = response.data;
      // console.log({message})
			commit("FETCH_ALL_BREEDS", message);
		} catch (error) {
			console.log(error);
		}
	},
};

const mutations = {
	FETCH_ALL_BREEDS(state, message) {
    // console.log("Mutation", message)
		state.dogs.breeds = message;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
