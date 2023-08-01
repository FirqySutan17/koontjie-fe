<template>
  <div class="wrapper-work">
    <div class="container">
      <div class="box-work">
        <div class="work"><p>Our Work</p></div>
        <div class="work">
          <div
            class="work-item"
            v-for="(portfolio, index) in portfolios"
            :key="portfolio.id"
          >
            <router-link
              :to="{
                name: 'work-detail',
                params: { slug: portfolio.slug },
              }"
            >
              <div v-if="portfolio.end_year == null">
                <div class="pro-box">
                  <div class="pro-item">{{ portfolio.client_name }}</div>
                  <div class="pro-item">
                    {{ portfolio.start_year }}
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="pro-box nonactive">
                  <div class="pro-item">{{ portfolio.client_name }}</div>
                  <div class="pro-item">
                    {{ portfolio.start_year }} - {{ portfolio.end_year }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="work">
          <div class="textris-box">
            <!-- <p>TEXTRIS</p>
            <p>{{ currentTime }}</p>

            <div class="highscore-box">
              <div class="highscore">
                <div class="box-class">
                  <div class="name">OLA</div>
                  <div class="score">303303</div>
                </div>
                <div class="box-class">
                  <div class="name">MUK</div>
                  <div class="score">91887</div>
                </div>
                <div class="box-class">
                  <div class="name">MUK</div>
                  <div class="score">83999</div>
                </div>
                <div class="box-class">
                  <div class="name">GAB</div>
                  <div class="score">61591</div>
                </div>
                <div class="box-class">
                  <div class="name">CMW</div>
                  <div class="score">49702</div>
                </div>
              </div>
              <div class="highscore"></div>
              <div class="highscore">
                <div class="box-class">
                  <div class="name">H.R</div>
                  <div class="score">42386</div>
                </div>
                <div class="box-class">
                  <div class="name">MUK</div>
                  <div class="score">27463</div>
                </div>
                <div class="box-class">
                  <div class="name">MUK</div>
                  <div class="score">26959</div>
                </div>
                <div class="box-class">
                  <div class="name">JDO</div>
                  <div class="score">24008</div>
                </div>
                <div class="box-class">
                  <div class="name">GHO</div>
                  <div class="score">21947</div>
                </div>
              </div>
            </div>
            <p class="btn-play">Play game &#10132;</p> -->
          </div>

          <div class="hiring-box">
            <!-- <p>WE'RE HIRING!</p>

            <div class="jobs">
              <router-link to="/"><p>WEB DEVELOPER</p></router-link>
              <router-link to="/"
                ><p>CREATIVE DEVELOPER / ANIMATOR</p></router-link
              >
              <router-link to="/"><p>UX-DESIGNER</p></router-link>
              <router-link to="/"><p>INTERNSHIPS</p></router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getContent } from "@/api/koontjie";

export default {
  name: "ContactComp",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Current Time:",
      currentTime: null,
      portfolios: [],
    };
  },
  methods: {
    async refreshPortfolio(url) {
      const getResponse = await getContent(url);
      if (getResponse.status == 200) {
        this.portfolios = getResponse.data.data;
        console.log(getResponse.data.data);
      } else {
        console.log(getResponse);
      }
    },
    updateCurrentTime() {
      this.currentTime = moment().format("MMMM YYYY");
    },
  },
  created() {
    this.refreshPortfolio("portfolio");
    this.currentTime = moment().format("MMMM YYYY");
    setInterval(() => this.updateCurrentTime(), 1000);
  },
};
</script>

<style>
.wrapper-work {
  margin: 90px 0px 50px 0px;
}
.box-work {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 150px;
  padding: 0 20px;
}
.box-work .work:nth-child(1) {
  grid-column: span 2;
  text-align: left;
}
.box-work .work:nth-child(2) {
  grid-column: span 3;
  text-align: left;
}
.box-work .work:nth-child(3) {
  grid-column: span 3;
  position: relative;
}

.box-work .work {
  color: #161615;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 22.5px;
}

.pro-box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 2;
}

.pro-box.nonactive {
  color: #bbbbb7;
}
.pro-box .pro-item {
  grid-column: span 3;
}

.pro-box .pro-item:nth-child(2) {
  text-align: right;
}

.work p {
  font-size: 16px;
}
.work a {
  text-decoration: none;
  color: inherit;
}

.work a:hover {
  color: #ff008c;
}

.work a:hover .pro-box.nonactive {
  color: #ff008c;
}
.textris-box {
  text-align: left;
  color: #161615;
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 500;
}
.highscore-box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  margin-top: 25px;
}

.highscore-box .highscore {
  grid-column: span 2;
}

.highscore .classement {
  margin-right: 20px;
}
.box-class {
  display: flex;
  width: 100%;
  font-size: 15.4px;
}
.name {
  text-align: left;
  width: 50%;
}

.score {
  text-align: left;
  width: 50%;
}

.btn-play {
  margin-top: 25px;
}

.hiring-box {
  position: relative;
  bottom: 0;
  text-align: left;
  font-size: 16px;
  margin-top: 50px;
}

.jobs {
  margin-top: 25px;
}

.jobs a {
  line-height: 22.5px;
}

@media (max-width: 1520px) {
  .box-work {
    column-gap: 100px;
  }
}

@media (max-width: 1440px) {
  .highscore-box {
    grid-template-columns: repeat(7, 1fr);
  }
  .highscore-box .highscore {
    grid-column: span 3;
  }
  .highscore-box .highscore:nth-child(2) {
    grid-column: span 1;
  }
}

@media (max-width: 992px) {
  .box-work {
    -moz-column-gap: 50px;
    column-gap: 50px;
  }
  .box-work .work:nth-child(1) {
    grid-column: span 3;
    text-align: left;
  }
  .box-work .work:nth-child(2) {
    grid-column: span 5;
    text-align: left;
  }
  .box-work .work:nth-child(3) {
    grid-column: span 8;
    text-align: left;
  }
  .textris-box {
    margin-top: 30px;
  }
  .hiring-box {
    margin-top: 30px;
    position: relative;
    bottom: 0;
    text-align: right;
  }
}

@media (max-width: 800px) {
  .box-work {
    -moz-column-gap: 100px;
    column-gap: 20px;
    padding: 0px 10px;
  }
  .box-work .work:nth-child(1) {
    grid-column: span 4;
    text-align: left;
  }
  .box-work .work:nth-child(2) {
    grid-column: span 4;
    text-align: left;
  }
  .box-work .work:nth-child(3) {
    grid-column: span 8;
    text-align: left;
  }
  .textris-box {
    margin: 30px 0px;
  }
  .work p {
    font-size: 18px;
  }
  .box-work .work {
    font-size: 18px;
    line-height: 30px;
  }
}

@media (max-width: 600px) {
  .box-work .work:nth-child(1) {
    grid-column: span 8;
    margin-bottom: 30px;
  }
  .box-work .work:nth-child(2) {
    grid-column: span 8;
  }
}

@media (max-width: 400px) {
  .wrapper-work {
    margin: 50px 0px 50px 0px;
  }
  .box-class {
    display: flex;
    width: 100%;
    font-size: 16px;
  }
}

@media (max-width: 300px) {
  .box-work {
    padding: 0 5px;
  }
  .highscore-box {
    column-gap: 0px;
  }
}
@media (max-width: 250px) {
  .highscore-box .highscore {
    grid-column: span 7;
  }
  .score {
    text-align: right;
    width: 50%;
  }
}
</style>
