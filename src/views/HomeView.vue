<script setup>
import HeroSection from "../components/HeroSection.vue";
import TabNav from "../components/TabNav.vue";
import DogCard from "../components/DogCard.vue";
</script>

<template>
	<main>
		<HeroSection />
		<TabNav />
		<div class="grid grid-cols-4 gap-x-[26px] gap-y-[50px]">
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
			<DogCard />
		</div>
	</main>
</template>
