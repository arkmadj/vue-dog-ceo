<template>
    <nav class="flex gap-12 pb-2 border-b border-b-[#E6E6E6]">
      <div class="flex flex-col items-center w-fit">
        <i>
          <DogFaceIcon/>
        </i>
        <span>All breeds</span>
      </div>
      <div class="flex flex-col items-center w-fit order hover:text-[#624CAB]">
        <i>
          <DogFaceIcon/>
        </i>
        <span>All breeds</span>
      </div>
    </nav>
</template>
<script setup>
import DogFaceIcon from './icons/DogFaceIcon.vue';
</script>