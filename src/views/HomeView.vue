<script setup>
import HeroSection from "../components/HeroSection.vue";
import TabNav from "../components/TabNav.vue";
import DogCard from "../components/DogCard.vue";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import CircleArrowDownIcon from "../components/icons/CircleArrowDownIcon.vue";
import CircleArrowUpIcon from "../components/icons/CircleArrowUpIcon.vue";

const store = useStore();

const searchTerm = ref("");

const loading = ref(false);

const dogs = computed(() => {
	if (searchTerm.value === "") {
		return store.getters.dogs;
	} else {
		return store.getters.selectedBreed;
	}
});

onMounted(async () => {
	loading.value = true;
	await store.dispatch("fetchDogs");
	await store.dispatch("fetchDogs");
	loading.value = false;
});

const handleSearch = async (term) => {
	loading.value = true;
	if (term) {
		await store.dispatch("fetchBreed", term);
	}
	searchTerm.value = term;
	loading.value = false;
};

const gotoTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const handleShowMore = async () => {
	loading.value = true;
	await store.dispatch("fetchDogs");
	await store.dispatch("fetchDogs");
	loading.value = false;
};
</script>

<template>
	<main class="w-[80%] mx-auto mb-20 lg:max-w-7xl mt-[67px]">
		<HeroSection @search="handleSearch" />
		<TabNav />
		<div
			class="grid grid-cols-1 md:grid-cols-4 gap-x-[26px] gap-y-[50px] mb-[104px]"
		>
			<DogCard v-for="(url, key) in dogs" :key="key" :url="url" />
		</div>
		<div class="flex justify-center">
			<div class="flex gap-[70px]" v-if="!loading">
				<div
					class="flex flex-col items-center gap-5 cursor-pointer w-fit group/arrow"
					@click="gotoTop()"
					v-if="dogs.length !== 0"
				>
					<i>
						<CircleArrowUpIcon
							class="hover:bg-[#F1EEFC] transition ease-in-out duration-500 rounded-full"
						/>
					</i>
					<span
						class="group-hover/arrow:text-[#624CAB] transition ease-in text-base font-medium"
						>Return to top</span
					>
				</div>
				<div
					class="flex flex-col items-center gap-5 cursor-pointer w-fit group/arrow"
					@click="gotoTop()"
					v-else
				>
					No results found. Please try again
				</div>
				<div
					class="flex flex-col items-center gap-5 cursor-pointer w-fit group/arrow"
					@click="handleShowMore"
					v-if="!searchTerm"
				>
					<i>
						<CircleArrowDownIcon
							class="hover:bg-[#F1EEFC] transition ease-in-out duration-500 rounded-full"
						/>
					</i>
					<span
						class="group-hover/arrow:text-[#624CAB] transition ease-in text-base font-medium"
						>Show more</span
					>
				</div>
			</div>
			<div class="flex flex-col gap-4 items-center" v-else>
				<img
					class="w-20 h-10 rounded-2xl object-cover"
					alt="Running dog"
					src="@/assets/images/running-dog.gif"
				/>
				<span class="text-[#624CAB] font-medium">Loading...</span>
			</div>
		</div>
	</main>
</template>
