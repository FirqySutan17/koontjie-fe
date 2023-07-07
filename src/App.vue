<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Rimba House`
    }}</template>
  </metainfo>
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
