<template>
  <section id="work-of-collective">
    <div class="container">
      <div class="wrapper-last">
        <div class="p-relative">
          <h2>CREATIVE COLLECTIVE DI KOONTJIE</h2>
          <h4>
            Kami mengumpulkan berbagai spesialis kreatif yang didorong oleh
            semangat yang sama, <br />
            yaitu kolaborasi bersama untuk menghadirkan solusi yang
            <i>fresh</i> dan <i>impactful</i>.
          </h4>
        </div>
      </div>
      <div class="slider-image">
        <Flicking
          :plugins="plugins"
          :options="{
            align: 'prev',
            noPanelStyleOverride: false,
            circular: true,
            bound: true,
          }"
        >
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-1.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-2.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-3.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-4.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-5.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-6.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-7.png" alt="" />
          </div>
          <div class="slide">
            <img class="img-slide" src="@/assets/images/slide-8.png" alt="" />
          </div>
        </Flicking>
      </div>
    </div>
  </section>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";

const plugins = [
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
];

export default {
  components: {
    Flicking,
  },
  data: function () {
    return {
      plugins,
    };
  },
  name: "MainComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-last {
  display: block;
  text-align: left;
  padding: 0px 10px;
  line-height: 35px;
  align-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

.wrapper-last h2 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 10px;
}

.wrapper-last h4 {
  font-weight: 500;
  font-size: 24px;
}
.slide-img {
  width: auto;
}
.img-slide {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media (max-width: 992px) {
  .img-slide {
    height: auto;
  }
}

@media (max-width: 600px) {
  .wrapper-last {
    padding: 10px;
  }
  .wrapper-last h4 {
    font-size: 20px;
  }
}

@media (max-width: 300px) {
  .wrapper-last h2 {
    font-size: 26px;
  }
  .wrapper-last h4 {
    font-size: 22px;
  }
}
</style>
