<template>
	<!-- <p>Breeds: {{ breeds }}</p> -->
	<nav class="flex gap-12 border-b border-b-[#E6E6E6] mb-[60px] overflow-x-hidden">
		<div
			:class="`${key === 0 ? 'border-b-[3px] border-b-[#624CAB]' : ''} flex flex-col items-center gap-3 min-w-max`"
			v-for="(breed, key) in breeds"
			:key="key"
		>
			<i>
				<DogFaceIcon />
			</i>
			<span class="capitalize">{{ breed }}</span>
		</div>
	</nav>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import DogFaceIcon from "./icons/DogFaceIcon.vue";

const store = useStore();

const breeds = computed(() => [
	"All breeds",
	...Object.keys(store.getters.breeds),
]);

onMounted(() => {
	store.dispatch("fetchAllBreeds");
});
</script>
