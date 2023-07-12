<template>
  <div class="wrapper-content">
    <div class="container">
      <div class="moving-text">
        <div class="ticker-wrap">
          <div class="ticker">
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; TBS®
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Read all about frictionless
              e-commerce with Aino
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Follow us on insta for more
              updates
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; We’re hiring developers and
              designers!
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Different flavors of this
              website are available in the footer
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; TBS®
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Read all about frictionless
              e-commerce with Aino
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Follow us on insta for more
              updates
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; We’re hiring developers and
              designers!
            </div>
            <div class="ticker__item">
              <span class="dot">•</span> &nbsp; Different flavors of this
              website are available in the footer
            </div>
          </div>
        </div>
      </div>

      <div class="showcase-box">
        <div class="showcase">
          <img src="@/assets/images/home/img-1.png" alt="" />
        </div>
        <div class="showcase">
          <img src="@/assets/images/home/img-4.png" alt="" />
        </div>
        <div class="showcase">
          <img src="@/assets/images/home/img-3.png" alt="" />
        </div>
        <div class="showcase">
          <img src="@/assets/images/home/img-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "ContentHomeComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-content {
  display: block;
  padding: 0px 20px;
  align-content: space-around;
  align-items: center;
  margin-top: 50px;
  overflow: hidden;
}
@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
    transition: all 0.5s ease;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    transition: all 0.5s ease;
  }
}
@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
    transition: all 0.5s ease;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    transition: all 0.5s ease;
  }
}
.ticker-wrap {
  position: relative;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  box-sizing: content-box;
}
.ticker-wrap .ticker {
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  white-space: nowrap;
  /* padding-right: 100%; */
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 120s;
  animation-duration: 120s;
}
.ticker-wrap .ticker__item {
  display: inline-block;
  font-size: 16px;
  color: #161615;
  padding: 0 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
}
.dot {
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -6px;
}
.showcase-box {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 10px;
}
.showcase-box .showcase {
  grid-column: span 4;
}
.showcase img {
  object-fit: cover;
  width: 100%;
  text-align: left;
}
.showcase:nth-child(2) {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.showcase:nth-child(2) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: auto;
}
.showcase:nth-child(3) {
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
}
.showcase:nth-child(3) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: auto;
}

@media (max-width: 992px) {
  .wrapper-content {
    padding: 0px 10px;
    margin-top: 0px;
  }
  .showcase:nth-child(2) img {
    -o-object-fit: scale-down;
    object-fit: scale-down;
    width: 100%;
  }
  .showcase:nth-child(3) img {
    -o-object-fit: scale-down;
    object-fit: scale-down;
    width: 100%;
  }
}

@media (max-width: 800px) {
  .ticker-wrap .ticker__item {
    font-size: 18px;
  }
}

@media (max-width: 300px) {
  .wrapper-content {
    padding: 0px 5px;
  }
  .showcase-box {
    column-gap: 5px;
  }
}
</style>
