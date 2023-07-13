<template>
  <div class="home">
    <BannerWorkDetailComp />
    <HeaderComp />
    <DetailWorkComp />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerWorkDetailComp from "@/components/work/BannerWorkDetailComp.vue";
import DetailWorkComp from "@/components/work/DetailWorkComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

export default {
  name: "WorkView",
  components: {
    HeaderComp,
    BannerWorkDetailComp,
    DetailWorkComp,
    FooterComp,
  },
};
</script>
