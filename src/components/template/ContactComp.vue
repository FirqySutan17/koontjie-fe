<template>
  <div class="wrapper-contact">
    <div class="container">
      <div class="boxie-contact">
        <div class="box">
          <p>LET'S WORK TOGETHER</p>
          <p>Rimba House</p>
          <img src="@/assets/images/dots.png" alt="" />
        </div>
        <div class="box">
          <router-link to="/contact" class="a-contact"
            ><span>Contact Us</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-contact {
  padding: 0px 0px 70px 0px;
}
.boxie-contact {
  padding: 60px 90px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 20px;
  background: #052e40;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.boxie-contact .box {
  grid-column: span 3;
}
.boxie-contact .box p:nth-child(1) {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #ffffff;
  text-align: left;
  margin-bottom: 5px;
}
.boxie-contact .box p:nth-child(2) {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #ffffff;
  text-align: left;
}
.boxie-contact .box img {
  width: 54%;
  margin-top: 30px;
  float: left;
}
.boxie-contact .box:nth-child(2) {
  display: flex;
  justify-content: right;
  align-items: center;
}
.boxie-contact .box .a-contact {
  font-family: "Nunito", sans-serif;
  padding: 12px 60px;
  gap: 10px;
  border: 1px solid #ffffff;
  filter: drop-shadow(10px 10px 40px rgba(164, 164, 164, 0.25));
  border-radius: 50px;
  font-style: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: right;
  color: #ffffff;
  text-decoration: none;
  float: right;
  transition: all 0.5s ease;
}
.boxie-contact .box .a-contact span {
  color: #ffffff;
}
.boxie-contact .box .a-contact:hover {
  border: 1px solid #9fbf5b;
  background: #9fbf5b;
  color: #fff;
  transition: all 0.5s ease;
}
@media (max-width: 1285px) {
  .wrapper-contact {
    padding: 0px 40px 70px 40px;
  }
}
@media (max-width: 1200px) {
  .boxie-contact {
    padding: 60px 60px;
  }
}
@media (max-width: 1024px) {
  .wrapper-contact {
    padding: 0px 20px 70px 20px;
  }
}
@media (max-width: 992px) {
  .wrapper-contact {
    padding: 0px 20px 70px 20px;
  }
}
@media (max-width: 768px) {
  .boxie-contact .box:nth-child(1) {
    grid-column: span 4;
  }
  .boxie-contact .box:nth-child(2) {
    grid-column: span 2;
  }
  .boxie-contact .box .a-contact {
    padding: 12px 40px;
  }
  .boxie-contact .box p:nth-child(1) {
    font-size: 22px;
  }
  .boxie-contact .box p:nth-child(2) {
    font-size: 35px;
  }
}
@media (max-width: 600px) {
  .boxie-contact .box:nth-child(1) {
    grid-column: span 6;
  }
  .boxie-contact .box:nth-child(2) {
    grid-column: span 6;
    justify-content: center;
    margin-top: 50px;
  }
}
@media (max-width: 395px) {
  .boxie-contact {
    padding: 60px 40px;
  }
}
@media (max-width: 285px) {
  .boxie-contact .box p:nth-child(1) {
    font-size: 20px;
  }
  .boxie-contact .box p:nth-child(2) {
    font-size: 24px;
  }
  .boxie-contact {
    padding: 40px 20px;
  }
  .boxie-contact .box .a-contact {
    font-size: 14px;
  }
}
</style>
