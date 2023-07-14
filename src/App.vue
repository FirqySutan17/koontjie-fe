<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Koontjie`
    }}</template>
  </metainfo>
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import WorkView from "./views/WorkView.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    HomeView,
    AboutView,
    WorkView,
  },
  setup() {
    useMeta({
      title: "Koontjie",
      htmlAttrs: { lang: "en", amp: true },
    });
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
