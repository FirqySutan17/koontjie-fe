<template>
  <div class="wrapper-header">
    <div class="header-bg-home box-tape">
      <div class="tape">
        <img src="@/assets/images/home/tape-1.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-2.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-3.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-4.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-5.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-6.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-7.png" alt="" />
      </div>
      <div class="tape">
        <img src="@/assets/images/home/tape-8.png" alt="" />
      </div>
    </div>
    <div class="header-tagline-home">
      <h1>MUSIK ADALAH KOONTJIE</h1>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "BannerHomeComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-header {
  display: block;
  height: 100vh;
}
.header-bg-home {
  object-fit: cover;
  width: 100%;
  margin: 0;
  background: #0000ff;
  height: 90vh;
  padding: 20px;
}

.box-tape {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
}

.box-tape .tape {
  grid-column: span 2;
  width: 100%;
  margin: auto;
}

.box-tape .tape img {
  object-fit: cover;
  width: 100%;
}

.header-tagline-home {
  margin: 0;
  height: 141px;
  background-color: #0000ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  height: 10vh;
}
.header-tagline-home h1 {
  letter-spacing: 45px;
  font-weight: 700;
  font-size: 35px;

  color: #ff008c;
}
@media (max-width: 1400px) {
  .header-tagline-home h1 {
    font-size: 24px;
  }
}

@media (max-width: 1200px) {
  .header-tagline-home h1 {
    letter-spacing: 30px;
    line-height: 50px;
  }
  .box-work {
    -moz-column-gap: 50px;
    column-gap: 50px;
  }
}

@media (max-width: 992px) {
  .box-tape .tape {
    grid-column: span 4;
  }
  .header-bg-home {
    height: auto;
  }
  .header-tagline-home {
    height: auto;
    padding-bottom: 20px;
  }
}

@media (max-width: 780px) {
  .header-tagline-home h1 {
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

  .header-tagline-home {
    height: auto;
  }

  .headline p {
    font-size: 18px !important;
  }
}

@media (max-width: 600px) {
  .header-tagline-home h1 {
    letter-spacing: 25px;
  }
}

@media (max-width: 300px) {
  .header-tagline-home h1 {
    letter-spacing: 10px;
  }
  .header-tagline-home h1 {
    margin-left: 15px;
  }
  .header-bg-home {
    padding: 10px 5px;
  }
}
</style>
