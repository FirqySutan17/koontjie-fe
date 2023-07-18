<template>
  <div class="wrapper-header">
    <div>
      <img
        src="@/assets/images/about-first.jpg"
        style="width: 100%"
        class="header-bg mySlides w3-animate-fading"
      />
      <img
        src="@/assets/images/about-second.jpg"
        style="width: 100%"
        class="header-bg mySlides w3-animate-fading"
      />
      <img
        src="@/assets/images/about-third.jpg"
        style="width: 100%"
        class="header-bg mySlides w3-animate-fading"
      />
    </div>
    <div class="header-tagline">
      <h1>KOLAB ADALAH KOONTJIE</h1>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "BannerComp",
  props: {
    msg: String,
  },
  mounted() {
    var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 9000);
    }
  },
};
</script>

<style>
.wrapper-header {
  display: block;
  height: 100vh;
}
.header-bg {
  object-fit: cover;
  width: 100%;
  margin: 0;
  height: 90vh;
}

.header-tagline {
  margin: 0;
  height: 141px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  height: 10vh;
}
.header-tagline h1 {
  letter-spacing: 45px;
  font-weight: 700;
  font-size: 35px;

  color: #fff;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
.mySliders {
  object-fit: contain !important;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 1400px) {
  .header-tagline h1 {
    font-size: 24px;
  }
}

@media (max-width: 780px) {
  .header-tagline h1 {
    margin-left: 37px;
  }
  .wrapper-menu ul li a {
    padding: 0px;
  }
  .wrapper-header {
    height: auto;
  }
  .header-bg {
    height: auto;
  }

  .header-tagline {
    height: auto;
    padding: 20px 0px;
  }
}

@media (max-width: 600px) {
  .header-tagline h1 {
    letter-spacing: 25px;
  }
}

@media (max-width: 300px) {
  .header-tagline h1 {
    letter-spacing: 10px;
  }
  .header-tagline h1 {
    margin-left: 15px;
  }
}
</style>
