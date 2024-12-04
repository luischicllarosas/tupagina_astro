<script lang="ts" setup>
import BtnContact from "./ui/btn-contact.vue";
import Logo from "./ui/Logo.vue";
</script>

<template>
  <nav class="navbar">
    <img class="logo" src="icons/logo/logo_white.svg" alt="" />
    <Logo class="ml-5" />
    <BtnContact />
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 1rem;
  //   justify-content: space-between;
  .logo {
    width: 55px;
    height: auto;
    // margin-re: auto;
  }
  // border: 1px solid gainsboro;
  // border: 1px solid rgba(255, 255, 255, 0.12);
  //   border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  border-width: 100%;
}
</style>
