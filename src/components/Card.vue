<script setup lang="ts">
  import avatarImage from '../assets/avatar-jessica.jpeg';
import Button from './Button.vue';
  const socialMediaLinks = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram"
];

</script>

<template>
  <div class=" w-full h-full  max-w-[23.938rem] max-h-[38.125rem]  bg-gray-d rounded-md flex flex-col justify-around items-center p-9 gap-9 max-sm:gap-6 max-sm:max-w-[20.625rem] max-sm:mx-2">
    <img :src="avatarImage" alt="some girl named jessica" class=" w-24 rounded-full">
    <hgroup class=" flex flex-col justify-between items-center font-Inter ">
      <h1 class=" text-white text-3xl font-Inter font-semibold tracking-tight max-sm:text-xl">   Jessica Randall</h1>
      <span class=" text-base text-green-bright mt-2 font-bold tracking-wide max-sm:text-sm "> London, United Kingdom</span>
    </hgroup>
    <span class=" text-base font-normal font-Inter text-white ">  "Front-end developer and avid reader."</span>

    <div class=" flex flex-col justify-around items-center gap-4 w-full">
      <Button v-for="item in socialMediaLinks" :text="item"/>
    </div>
  </div>
</template>

