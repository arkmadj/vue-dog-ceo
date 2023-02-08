import { createStore } from "vuex";
import dogs from "./dogs";

export default createStore({
	modules: {
		dogs,
	},
	strict: true,
});
