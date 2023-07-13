<template>
  <div class="wrapper-work-detail">
    <div class="detail-box">
      <div class="detail">
        <div class="detail-title">CLIENT</div>
        <div class="detail-title">YEAR</div>
        <div class="detail-title">WORK</div>
      </div>
      <div class="detail">
        <div class="detail-input">EMMA S.</div>
        <div class="detail-input">2021 - ONGOING</div>
        <div class="detail-input">
          <div class="cat-work">
            <div class="cat">E - COMMERCE</div>
            <div class="cat">CENTRA</div>
            <div class="cat">UI+UX DESIGN</div>
            <div class="cat">IDENTITY</div>
            <div class="cat">DEVELOPMENT</div>
          </div>
        </div>
      </div>
      <div class="detail"><a href="#" class="anchor-view">VIEW SITE</a></div>
    </div>

    <div class="detail-work-box">
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-1.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-2.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-3.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-4.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-5.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-6.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <img
          src="@/assets/images/detail/detail-7.png"
          alt=""
          class="work-detail"
        />
      </div>
      <div class="detail-work">
        <!-- <video style="width: 100%; height: 100%" autoplay muted loop>
          <source
            src=""
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> -->
        <img
          src="@/assets/images/detail/detail-8.png"
          alt=""
          class="work-detail"
        />
      </div>
    </div>
  </div>

  <div class="detail-work-group">
    <h1 class="detail-work-title">
      Emma S. skincare is a Swedish skincare brand, founded by former supermodel
      Emma S. Wiklund.
    </h1>
    <div class="detail-work-caption">
      <div class="detail-caption"></div>
      <div class="detail-caption"></div>
      <div class="detail-caption">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim
        assumenda officiis, praesentium voluptatem debitis sit voluptatum
        quaerat eius reiciendis illo architecto, totam unde sed ipsa voluptates
        tenetur, molestiae mollitia! <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        recusandae earum explicabo beatae, ullam quos hic, ipsa magni veritatis
        sed natus. Ratione iste tempora ipsam nostrum maiores doloribus dicta
        consequatur!
      </div>
      <div class="detail-caption">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim
        assumenda officiis, praesentium voluptatem debitis sit voluptatum
        quaerat eius reiciendis illo architecto, totam unde sed ipsa voluptates
        tenetur, molestiae mollitia! <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        recusandae earum explicabo beatae, ullam quos hic, ipsa magni veritatis
        sed natus. Ratione iste tempora ipsam nostrum maiores doloribus dicta
        consequatur!
      </div>
    </div>
    <div class="detail-work-slider">
      <div class="slider-image">
        <Flicking
          :plugins="plugins"
          :options="{
            align: 'prev',
            noPanelStyleOverride: false,
            panelsPerView: 3,
            circularFallback: 'bound',
            circular: true,
            bound: true,
          }"
        >
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-slide-1.png"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-slide-2.png"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-slide-3.png"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-4.png"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-5.png"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              class="img-slide"
              src="@/assets/images/detail/detail-6.png"
              alt=""
            />
          </div>
        </Flicking>
      </div>
    </div>
  </div>

  <div class="box-work _box-work">
    <div class="work"><p>MORE CASES</p></div>
    <div class="work">
      <router-link to="/work-detail">
        <div class="pro-box nonactive">
          <div class="pro-item">Nudie Jeans</div>
          <div class="pro-item">2010</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box">
          <div class="pro-item">All Blues</div>
          <div class="pro-item">2020</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box nonactive">
          <div class="pro-item">Majblomman</div>
          <div class="pro-item">2018</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box nonactive">
          <div class="pro-item">hyper island</div>
          <div class="pro-item">2022 - 2022</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box">
          <div class="pro-item">Tinted</div>
          <div class="pro-item">2022 - 2023</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box">
          <div class="pro-item">Icebug</div>
          <div class="pro-item">2022</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box nonactive">
          <div class="pro-item">Eton Shirts</div>
          <div class="pro-item">2019 - 2022</div>
        </div>
      </router-link>

      <router-link to="/work-detail">
        <div class="pro-box">
          <div class="pro-item">Emma S</div>
          <div class="pro-item">2021 - 2021</div>
        </div>
      </router-link>
    </div>
    <div class="work">
      <div class="hiring-box">
        <p>WE'RE HIRING!</p>

        <div class="jobs">
          <router-link to="/work-detail"><p>WEB DEVELOPER</p></router-link>
          <router-link to="/work-detail"
            ><p>CREATIVE DEVELOPER / ANIMATOR</p></router-link
          >
          <router-link to="/work-detail"><p>UX-DESIGNER</p></router-link>
          <router-link to="/work-detail"><p>INTERNSHIPS</p></router-link>
        </div>
      </div>
    </div>
  </div>
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
  name: "DetailWorkComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-work-detail {
  padding: 50px 10px;
  width: 100%;
  position: relative;
}

.detail-box {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  margin: 20px 0px;
}

.detail-box .detail:nth-child(1) {
  grid-column: span 1;
  width: 100%;
}

.detail-box .detail:nth-child(2) {
  grid-column: span 3;
  width: 100%;
}

.detail-box .detail:nth-child(3) {
  grid-column: span 2;
  width: 100%;
  position: relative;
}

.detail-box .detail:nth-child(3) a {
  position: absolute;
  bottom: 0;
  text-decoration: none;
}

.detail-box .detail:nth-child(3) a:hover {
  color: #ff008c;
}

.detail-box .detail img {
  object-fit: cover;
  width: 100%;
}

.detail-title,
.detail-input,
.anchor-view {
  font-weight: 500;
  font-size: 16px;
  line-height: 22.5px;
  color: #161615;
  text-transform: uppercase;
  text-align: left;
}

.cat-work {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
}

.cat-work .cat {
  grid-column: span 1;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cat-work .cat:nth-child(1) {
  text-align: left;
  justify-content: start;
}

.detail-work-box {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 5px;
}

.detail-work-box .detail-work {
  grid-column: span 4;
  width: 100%;
}

.detail-work-box .detail-work img {
  object-fit: cover;
  width: 100%;
}
.detail-work-box .detail-work:nth-child(4) {
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
}
.detail-work-box .detail-work:nth-child(4) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: auto;
  padding-bottom: 4px;
}

.detail-work-box .detail-work:nth-child(5) {
  grid-column: span 8;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
}

.detail-work-box .detail-work:nth-child(5) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: auto;
  padding-bottom: 4px;
}

.detail-work-box .detail-work:nth-child(6) {
  grid-column: span 2;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
}

.detail-work-box .detail-work:nth-child(6) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: 100%;
  padding-bottom: 4px;
}

.detail-work-box .detail-work:nth-child(7) {
  grid-column: span 2;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
}

.detail-work-box .detail-work:nth-child(7) img {
  -o-object-fit: scale-down;
  object-fit: scale-down;
  width: 100%;
  padding-bottom: 4px;
}

.detail-work-box .detail-work:nth-child(8) {
  grid-column: span 4;
}
._box-work {
  margin: 40px 0px;
  padding: 0px 10px;
}

.detail-work-group {
  margin-bottom: 30px;
  width: 100%;
  padding: 0px 10px;
}

.detail-work-group h1 {
  font-weight: 500;
  font-size: 65px;
  line-height: 67.5px;
  letter-spacing: -3px;
  text-align: left;
  margin-bottom: 20px;
}
.detail-work-caption {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 50px;
  margin-bottom: 30px;
}

.detail-work-caption .detail-caption {
  grid-column: span 2;
  width: 100%;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 22.5px;
  letter-spacing: -0.13px;
  color: #161615;
}

@media (max-width: 1200px) {
  .detail-box .detail:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail-box .detail:nth-child(3) a {
    position: relative;
  }
  .detail-work-caption .detail-caption {
    grid-column: span 1;
  }
  .detail-work-caption .detail-caption:nth-child(3) {
    grid-column: span 3;
  }
  .detail-work-caption .detail-caption:nth-child(4) {
    grid-column: span 3;
  }
  .detail-box .detail:nth-child(2) {
    grid-column: span 4;
    width: 100%;
  }
  .detail-box .detail:nth-child(3) {
    grid-column: span 1;
  }
  .wrapper-header {
    display: block;
    height: auto;
  }
  .header-bg {
    height: auto;
    object-fit: contain;
  }
}

@media (max-width: 992px) {
  .detail-box .detail:nth-child(2) {
    grid-column: span 5;
  }

  .detail-box .detail:nth-child(3) {
    grid-column: span 8;
    padding: 20px 0px;
  }
  .detail-work-box .detail-work:nth-child(4) img {
    width: 100%;
    object-fit: cover;
  }
  .detail-work-box .detail-work:nth-child(5) img {
    width: 100%;
    object-fit: cover;
  }
  .detail-work-box .detail-work:nth-child(6) {
    grid-column: span 4;
  }
  .detail-work-box .detail-work:nth-child(7) {
    grid-column: span 4;
  }
  .detail-work-box .detail-work:nth-child(6) img {
    width: 100%;
    object-fit: cover;
  }
  .detail-work-box .detail-work:nth-child(7) img {
    width: 100%;
    object-fit: cover;
  }
  .detail-work-box .detail-work:nth-child(8) {
    grid-column: span 8;
  }
  .detail-work-box .detail-work:nth-child(8) img {
    width: 100%;
    object-fit: cover;
  }
  .detail-work-caption .detail-caption {
    grid-column: none;
    font-size: 18px;
  }
  .detail-work-caption .detail-caption:nth-child(1) {
    display: none;
  }
  .detail-work-caption .detail-caption:nth-child(2) {
    display: none;
  }
  .detail-work-caption .detail-caption:nth-child(3) {
    grid-column: span 4;
  }
  .detail-work-caption .detail-caption:nth-child(4) {
    grid-column: span 4;
  }
  .box-work._box-work .work {
    font-size: 18px;
  }
  .box-work._box-work .work p {
    font-size: 18px;
  }
}

@media (max-width: 800px) {
  .box-work .work:nth-child(1) {
    grid-column: span 3;
    text-align: left;
  }
  .box-work .work:nth-child(2) {
    grid-column: span 5;
    text-align: left;
  }
  .cat-work {
    grid-template-columns: repeat(6, 1fr);
  }
  .cat-work .cat {
    grid-column: span 2;
    margin-bottom: 5px;
    justify-content: start;
  }
  .detail-work-group h1 {
    font-size: 55px;
    line-height: 55px;
  }
}

@media (max-width: 600px) {
  .logos {
    margin-left: 0px;
  }
  .detail-work-group h1 {
    font-size: 55px;
  }
  .detail-work-caption .detail-caption:nth-child(3) {
    grid-column: span 8;
    margin-bottom: 20px;
  }
  .detail-work-caption .detail-caption:nth-child(4) {
    grid-column: span 8;
  }
  .wrapper-footer {
    padding: 20px 10px;
  }
  .wrapper-footer .footer {
    text-align: left;
  }
}

@media (max-width: 450px) {
  .cat-work .cat {
    grid-column: span 3;
  }
  .detail-box .detail:nth-child(1) {
    grid-column: span 2;
  }
  .detail-box .detail:nth-child(2) {
    grid-column: span 4;
  }
  .detail-work-group h1 {
    font-size: 45px;
    line-height: 50px;
  }
  .cat-work .cat {
    grid-column: span 6;
    justify-content: start;
  }
  ._box-work .work:nth-child(1) {
    grid-column: span 8;
    text-align: left;
  }
  ._box-work .work:nth-child(2) {
    grid-column: span 8;
    text-align: left;
  }
  .detail-work-caption {
    column-gap: 20px;
  }
  .wrapper-footer .footer p {
    font-size: 16px;
  }
  .wrapper-footer .footer a {
    font-size: 16px;
  }
}
@media (max-width: 370px) {
  .detail-work-group h1 {
    font-size: 44px;
    line-height: 50px;
  }
  .wrapper-work-detail {
    padding: 50px 5px;
  }
  .detail-work-group {
    padding: 0px 5px;
  }
}

@media (max-width: 300px) {
  .detail-work-group h1 {
    font-size: 32px;
    line-height: 35px;
  }

  .detail-work-caption .detail-caption {
    grid-column: span 8;
  }
  .detail-work-caption .detail-caption {
    grid-column: none;
    font-size: 14px;
  }
  .box-work._box-work .work p {
    font-size: 14px;
  }
  .box-work._box-work .work {
    font-size: 14px;
  }
  .detail-title,
  .detail-input,
  .anchor-view {
    font-size: 14px;
  }
}
</style>
