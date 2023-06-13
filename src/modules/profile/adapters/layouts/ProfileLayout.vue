<template>
  <div>
    <NavBar />
    <div class="d-flex">
      <div class="sidebar-container col col-sm-2">
        <SideBar />
      </div>
      <div class="col content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/NavBar.vue")),
    SideBar: defineAsyncComponent(() => import("@/components/SideBar.vue")),
  },
};
</script>

<style scoped>
.sidebar-container {
  margin: 0;
  padding: 0;
  width: 100%;
  border-right: 1px solid #f0f0f0;
}

.content {
  padding: 2rem;
  background-color: #f0f0f0;
}
</style>
