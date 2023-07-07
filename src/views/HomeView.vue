<template>
  <div class="home">
    <BannerComp />
    <HeaderComp />
    <MainComp />
    <SliderComp />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerComp from "@/components/home/BannerComp.vue";
import MainComp from "@/components/home/MainComp.vue";
import SliderComp from "@/components/home/SliderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    BannerComp,
    MainComp,
    SliderComp,
    FooterComp,
  },
};
</script>
