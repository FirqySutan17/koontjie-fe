<template>
  <div class="home">
    <BannerWorkComp />
    <HeaderComp />
    <WorkComp />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerWorkComp from "@/components/work/BannerWorkComp.vue";
import WorkComp from "@/components/template/WorkComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "WorkView",
  components: {
    HeaderComp,
    BannerWorkComp,
    WorkComp,
    FooterComp,
  },
};
</script>
