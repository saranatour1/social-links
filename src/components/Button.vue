<template>
  <button  class=" w-full h-full max-h-12 max-w-full bg-gray-w py-2 text-white font-Inter font-bold text-base hover:bg-green-bright transition-colors  hover:text-current rounded-lg">
    {{  text }}
  </button>
</template>
<script lang="ts" setup>
  defineProps<{text:string}>()
</script>

