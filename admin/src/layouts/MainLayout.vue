<template>
  <div class="vh-100">
    <div class="row g-0">
      <div class="col-2 border-1 border-bottom border-end">
        <div class="text-center py-3 fw-bold text-purple fs-5">
          Admin Page
        </div>
      </div>
      <div class="col-10 border-1 border-bottom" />
    </div>
    <div class="row g-0 h-100">
      <div class="col-2 border-1 border-end">
        <navbar />
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import Navbar from '../components/navbar/Navbar.vue';

</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>