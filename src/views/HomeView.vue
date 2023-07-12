<template>
  <div class="home">
    <BannerHomeComp />
    <HeaderComp />
    <MainHomeComp />
    <ContentHomeComp />
    <WorkComp />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerHomeComp from "@/components/home/BannerHomeComp.vue";
import MainHomeComp from "@/components/home/MainHomeComp.vue";
import ContentHomeComp from "@/components/home/ContentHomeComp.vue";
import WorkComp from "@/components/template/WorkComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    BannerHomeComp,
    MainHomeComp,
    ContentHomeComp,
    WorkComp,
    FooterComp,
  },
};
</script>
