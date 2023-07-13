<template>
  <header class="desktop">
    <div class="container">
      <div class="wrapper-menu">
        <div class="menus date-style">
          <span>{{ currentTime }}</span>
          <router-link to="/">
            <img class="logos" src="@/assets/images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="menus">
          <router-link class="m-anchor" to="/work-of-collective"
            >WORKS OF COLLECTIVE</router-link
          >
        </div>
        <div class="menus">
          <router-link class="m-anchor" to="/about">ABOUT</router-link>
        </div>
        <div class="menus">
          <router-link class="m-anchor" to="/">PORTFOLIO</router-link>
        </div>
        <div class="menus">
          <router-link class="m-anchor" to="/">CONTACT</router-link>
        </div>
        <div class="menus">A MEMBER OF PINC GROUP OF COMPANIES</div>
      </div>
    </div>
  </header>

  <header class="mobile">
    <nav class="nav-mobile">
      <div class="menus date-style">
        <span>{{ currentTime }}</span>
        <router-link to="/">
          <img class="logos" src="@/assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <input type="checkbox" id="active-menu" />
      <label for="active-menu" class="menu-btn-nav">
        <i class="bx bx-menu"></i>
      </label>
      <div class="wrapper-menu">
        <ul>
          <li>
            <router-link to="/work-of-collective" class="m-anchor"
              >WORKS OF COLLECTIVE</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="m-anchor">ABOUT</router-link>
          </li>
          <li>
            <router-link to="/" class="m-anchor" href="#"
              >PORTFOLIO</router-link
            >
          </li>
          <li>
            <router-link to="/" class="m-anchor" href="#">CONTACT</router-link>
          </li>
          <li>A MEMBER OF PINC GROUP OF COMPANIES</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import $ from "jquery";
import moment from "moment";

$(document).ready(function () {
  $("#active-menu").click(function () {
    $("#active-menu").toggleClass("checked", true);
  });
  $(".m-anchor").click(function () {
    $("#active-menu").prop("checked", false);
  });
  $(".m-anchor").click(function () {
    /* remove class from prior active link*/
    $(".activeLinkClass").removeClass("activeLinkClass");
    /* "this" is current link clicked*/
    $(this).addClass("activeLinkClass");
  });
});

export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Current Time:",
      currentTime: null,
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("dddd h:mm:ss");
    },
  },
  created() {
    this.currentTime = moment().format("dddd h:mm:ss");
    setInterval(() => this.updateCurrentTime(), 1000);
  },
};
</script>

<style>
header.desktop {
  display: block;
}
header.mobile {
  display: none;
}

a.activeLinkClass {
  color: #ff008c !important;
}
.wrapper-menu {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 20px 10px 0px 10px;
  margin-top: 70px;
}
.menus:nth-child(1) {
  grid-column: span 6;
}
.menus:nth-child(2) {
  grid-column: span 2;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 50px;
}
.menus:nth-child(3) {
  grid-column: span 1;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
}
.menus:nth-child(4) {
  grid-column: span 1;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
}
.menus:nth-child(5) {
  grid-column: span 1;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
}
.menus:nth-child(6) {
  grid-column: span 4;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 50px;
  font-weight: 700;
}
.menus {
  font-size: 14px;
}
.menus.date-style {
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #ff008c;
  text-transform: uppercase;
  letter-spacing: 0.54px;
}
.logos {
  object-fit: cover;
  width: 800px;
}

.menus.date-style span {
  position: absolute;
  bottom: 40px;
}
.menus a {
  text-decoration: none;
  color: #161615;
  text-align: left;
  font-weight: 500;
}
.menus a:hover {
  color: #ff008c;
}

li:nth-child(5) {
  font-weight: 500;
}
.logos {
  margin-left: 30px;
}

@media (max-width: 1620px) {
  .logos {
    width: 600px;
  }
}
@media (max-width: 1400px) {
  .menus:nth-child(2) {
    grid-column: span 3;
    justify-content: end;
  }
  .menus:nth-child(3) {
    grid-column: span 2;
    justify-content: end;
  }
  .menus:nth-child(4) {
    grid-column: span 2;
    justify-content: end;
  }
  .menus:nth-child(5) {
    grid-column: span 2;
    justify-content: end;
  }
  .menus:nth-child(6) {
    grid-column: span 15;
    justify-content: end;
    margin-top: 20px;
  }
}

@media (max-width: 1200px) {
  header.desktop {
    display: none;
  }
  header.mobile {
    display: block;
    position: relative;
  }
  .header-tagline h1 {
    font-size: 24px;
    line-height: 50px;
  }
  .header-tagline-work h1 {
    font-size: 24px;
    line-height: 35px;
  }

  .menus.date-style span {
    position: absolute;
    bottom: 40px;
    left: 10px;
  }
  header ul li:nth-child(5) {
    margin-top: 25px;
  }
  .wrapper-menu {
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 100%;
    /* background: linear-gradient(-135deg, #c850c0, #4158d0); */
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
    /* clip-path: circle(25px at calc(0% + 45px) 45px); */
    background: #fff;
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
    z-index: 1;
    margin-top: 0px;
  }
  #active-menu:checked ~ .wrapper-menu {
    clip-path: circle(75%);
  }
  .menus.date-style {
    display: flex;
  }
  .menu-btn-nav {
    position: absolute;
    z-index: 2;
    right: 20px;
    /* left: 20px; */
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    color: #000;
    cursor: pointer;
    /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    background: #fff;
    transition: all 0.3s ease-in-out;
  }
  #active-menu:checked ~ .menu-btn-nav {
    color: #fff;
  }
  #active-menu:checked ~ .menu-btn-nav i:before {
    content: "\ec8d";
    color: #2c3e50;
    font-weight: 700;
  }
  .menu-btn-nav i {
    font-size: 36px;
    display: inline-block;
    vertical-align: middle;
  }
  .wrapper-menu ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    display: block;
  }
  .wrapper-menu ul li {
    margin: 25px 0;
  }
  .wrapper-menu ul li a {
    color: none;
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 0px;
    color: #2c3e50;
    border-radius: 50px;
    background: #fff;
    position: relative;
    line-height: 50px;
    transition: all 0.3s ease;
    width: 100%;
  }

  .wrapper-menu ul li a:hover {
    color: #ff008c;
  }
  input[type="checkbox"] {
    display: none;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title {
    font-size: 40px;
    font-weight: 700;
  }
  .content p {
    font-size: 35px;
    font-weight: 600;
  }
  header ul li:nth-child(2) {
    margin-left: 0px;
  }
  header ul li:nth-child(3) {
    margin-left: 0px;
  }
  header ul li:nth-child(5) {
    margin-left: 0px;
  }
  header ul li:nth-child(7) {
    margin-left: 0px;
  }
  header img {
    width: 120px;
    float: left;
    margin-top: 35px;
  }
  @keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
}
@media (max-width: 992px) {
  .header-tagline-work h1 {
    line-height: 45px;
  }
}
@media (max-width: 600px) {
  header {
    padding: 0px 15px;
  }
  header img {
    width: 85px;
    float: left;
    margin-top: 25px;
  }
  .menu-btn-nav i {
    font-size: 22px;
  }
  .menu-btn-nav {
    right: 10px;
    /* left: 20px; */
    top: 10px;
  }
  .wrapper-menu {
    -webkit-clip-path: circle(25px at calc(100% - 35px) 35px);
    clip-path: circle(25px at calc(100% - 35px) 35px);
    transition: all 0.3s ease-in-out;
  }
  .wrapper-menu ul li {
    margin: 10px 0;
  }
  .wrapper-menu ul li a {
    font-size: 24px;
  }
  header img {
    width: 110px;
  }
}
@media (max-width: 380px) {
  header img {
    width: 100px;
  }
}
@media (max-width: 285px) {
  .wrapper-menu ul {
    width: 100%;
  }
  .wrapper-menu ul li {
    margin: 0px 0;
  }
  .wrapper-menu ul li a {
    font-size: 20px;
  }
  .title-wrap h2 {
    font-size: 26px !important;
  }
}

@media (max-width: 600px) {
  .logos {
    width: 100%;
  }
  .wrapper-menu ul {
    width: 100%;
  }
  .menus.date-style span {
    bottom: -30px;
  }
}

@media (max-width: 400px) {
  .wrapper-main {
    height: auto;
    margin: 80px 0px 20px 0px;
  }
}

@media (max-width: 300px) {
  .logos {
    width: 100%;
    margin-top: 70px;
  }
  header {
    padding: 0px 5px;
  }
}
</style>
