<template>
	<section class="relative flex flex-col items-center bg-resd-500 mb-28">
		<h1
			class="font-unbounded text-[#624CAB] text-5xl w-[544px] text-center mb-5 relative animate-slide-in -translate-y-10"
		>
			Find your next best friend
		</h1>
		<p class="text-[#222222] font-poppins w-[609px] text-center mb-5 animate-slide-in">
			We understand that adulting can get lonely. With more than 100 breeds of
			dogs, learning and choosing the right friend for you has never been
			easier.
		</p>
		<div
			class="border border-[#828282] rounded-full flex items-center h-14 w-[586px] justify-between pl-6 gap-1 focus-within:border-[#624CAB] focus-within:ring-[#624CAB] focus-within:ring-1 animate-slide-in-delay opacity-0"
		>
			<i>
				<SearchIcon />
			</i>
			<input class="w-full focus:outline-none" placeholder="Search breed" />
			<i
				class="bg-[#624CAB] h-full overflow-hidden w-16 rounded-r-full grid place-items-center"
			>
				<ArrowRightIcon />
			</i>
		</div>
	</section>
</template>

<script setup>
import ArrowRightIcon from "./icons/IconArrowRight.vue";
import SearchIcon from "./icons/IconSearch.vue";
</script>
