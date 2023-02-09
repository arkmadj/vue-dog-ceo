<script setup>
import HeroSection from "../components/HeroSection.vue";
import TabNav from "../components/TabNav.vue";
import DogCard from "../components/DogCard.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dogs = computed(() => store.getters.dogs);

onMounted(async () => {
	await store.dispatch("fetchDogs");
});
</script>

<template>
	<main class="w-[80%] mx-auto md:w-full mb-20">
		<HeroSection />
		<TabNav />
		<div class="grid grid-cols-1 md:grid-cols-4 gap-x-[26px] gap-y-[50px]">
			<DogCard
				v-for="(url, key) in dogs"
				:key="key"
				:url="url"
			/>
		</div>
	</main>
</template>
