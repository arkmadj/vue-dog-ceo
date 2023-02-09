<template>
	<header class="flex items-center justify-between h-28 border-b-0 md:border-b-[1px] border-b-[#E9E9E9] px-[10%] lg:px-[15%]">
		<div class="flex cursor-pointer" @click="gotoHomePage">
			<span class="font-titan text-[#222222]">dogfinder</span>
			<img
				alt="Vue logo"
				class="logo"
				src="@/assets/logo.svg"
				width="18"
				height="18"
			/>
		</div>

		<nav>
			<RouterLink
				to="/"
				class="font-poppins text-sm font-medium text-black hover:text-[#624CAB]"
				>Contact</RouterLink
			>
		</nav>
	</header>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const gotoHomePage = () => {
	router.push({
		name: 'home',
	})
}
</script>
