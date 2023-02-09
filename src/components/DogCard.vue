<template>
	<div class="bg-[#F1EEFC] h-[235px] rounded-2xl w-[279px]">
		<img
			class="object-cover rounded-2xl h-44 w-72 border-2 border-[#624CAB]"
			alt="Dog image"
			width="279"
			height="174"
			v-lazy="props.url"
		/>
		<div class="flex items-center justify-between px-3 h-14">
			<spa class="">Beagle</spa>
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

const breed = computed(() => props.url.split("/")[4]);
const name = computed(() => props.url.split("/")[5]);
</script>
