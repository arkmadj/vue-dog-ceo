<script setup>
import HeroSection from "../components/HeroSection.vue";
import TabNav from "../components/TabNav.vue";
import DogCard from "../components/DogCard.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dogs = computed(() => store.getters.dogs);
console.log({ dogs });

onMounted(() => {
	store.dispatch("fetchDogs");
});

const lazyLoadImages(){
}
</script>

<template>
	<main>
		<!-- <p>{{ dogs }}</p> -->
		<HeroSection />
		<TabNav />
		<div class="grid grid-cols-4 gap-x-[26px] gap-y-[50px]">
			<DogCard v-for="(url, key) in dogs" :key="key" :url="url"/>
		</div>
	</main>
</template>
