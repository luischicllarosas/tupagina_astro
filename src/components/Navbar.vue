<script lang="ts" setup>
import Logo from "./ui/Logo.vue";
</script>

<template>
  <nav class="navbar">
    <img class="logo" src="icons/logo/logo_white.svg" alt="" />
    <!-- <span class="karla font-semibold text-2xl content-center ml-5"
      >tupagina.com.pe</span
    > -->
    <Logo class="ml-5" />
    <a class="codepen-button ml-auto"><span>Contactar</span></a>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 1rem;
  //   justify-content: space-between;
  .logo {
    width: 60px;
    height: auto;
    // margin-re: auto;
  }
  // border: 1px solid gainsboro;
  // border: 1px solid rgba(255, 255, 255, 0.12);
  //   border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  border-width: 100%;
}
</style>
