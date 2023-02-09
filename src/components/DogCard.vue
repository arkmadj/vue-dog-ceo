<template>
	<div class="bg-[#F1EEFC] h-[235px] rounded-2xl w-[279px]">
		<div class="relative">
			<img
				class="object-cover rounded-2xl h-44 w-72 border-2 border-[#624CAB] cursor-pointers"
				alt="Dog image"
				width="279"
				height="174"
				v-lazy="props.url"
			/>
			<div
				class="absolute top-0 grid w-full h-full transition duration-300 ease-in bg-resd-500 rounded-2xl backdrop-filter hover:backdrop-blur-sm place-items-center group/goto"
			>
				<button
					class="absolute transition ease-in -translate-y-1 opacity-0 group-hover/goto:opacity-100 group-hover/goto:translate-y-0 w-fit font-semibold bg-[#624CAB] text-white text-xs p-2 rounded-lg top-1/2"
					@click="gotoDogDetails()"
				>
					View more
				</button>
			</div>
		</div>
		<div class="flex items-center justify-between px-3 h-14">
			<span class="font-semibold">Beagle</span>
			<span
				class="bg-[#DCD4F7] rounded-lg text-[#534091] text-xs px-[10px] py-1 font-bold capitalize"
				>{{ breed }}</span
			>
		</div>
	</div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
	url: {
		type: String,
		required: true,
	},
});

const gotoDogDetails = () => {
	alert(breed.value);
};

const breed = computed(() => props.url.split("/")[4]);
const name = computed(() => props.url.split("/")[5]);
</script>
