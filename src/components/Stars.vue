<template>
  <div class="flex gap-[2.5px]">
    <i v-for="i in fullStars" :key="i">
      <FullStarIcon/>
    </i>
    <i v-if="halfStar">
      <HalfStarIcon/>
    </i>
    <i v-for="i in emptyStars" :key="i">
      <EmptyStarIcon/>
    </i>
  </div>
</template>
<script setup>
import FullStarIcon from './icons/FullStarIcon.vue';
import HalfStarIcon from './icons/HalfStarIcon.vue';
import EmptyStarIcon from './icons/EmptyStarIcon.vue';
import { computed } from "vue";

const props = defineProps({
  score: {
    type: Number,
    required: true,
  }
})

const fullStars = computed(() => Math.floor(props.score))
const halfStar = computed(() => props.score % 1)
const emptyStars = computed(() => Math.floor(5 - props.score))

</script>
