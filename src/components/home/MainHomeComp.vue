<template>
  <div class="wrapper-main-home">
    <div class="container">
      <div class="box-ban">
        <div class="ban">
          <img src="@/assets/images/home/belleza.jpg" alt="" />
        </div>
        <div class="ban">
          <img src="@/assets/images/home/skai-web.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="wrapper-headline">
      <div class="box-headline" style="margin-bottom: 30px">
        <!-- <div class="headline">
          <div class="p-relative">
            <h2>SOLUSI, KREATIF, DAN KOLABORATIF</h2>
            <h4>
              3 hal yang membuat kami akan selalu menjadi koontjiean untuk
              solusi kreatif brand anda.
            </h4>
          </div>
        </div> -->
        <!-- <div class="headline"></div> -->
        <div class="headline">
          <h2 style="letter-spacing: 1px">
            KOONTJIE: Kreativitas melalui Kolaborasi
          </h2>
          <h4>
            Pernah tersandera oleh birokrasi agensi besar dalam menjalankan visi
            brand Anda, dan menginginkan pendekatan yang lebih langsung?
            <br /><br />
            Dengan merangkul esensi kolaborasi, KOONTJIE mewakili gelombang baru
            agensi kreatif. Struktur kami yang lincah dan efisien mengedepankan
            solusi kreatif yang berkualitas dalam waktu singkat, dengan
            memangkas birokrasi dan memberikan Anda akses langsung kepada
            kreatif kami.
          </h4>
        </div>
      </div>
      <!-- 
      <div class="box-headline">
        <div class="headline" style="grid-column: span 8">
          <div class="p-relative">
            <h2>KOONTJIE: Kreativitas melalui Kolaborasi</h2>
            <h4>
              Pernah tersandera oleh birokrasi agensi besar dalam menjalankan
              visi brand Anda, dan menginginkan pendekatan yang lebih langsung?
              <br /><br />
              Dengan merangkul esensi kolaborasi, KOONTJIE mewakili gelombang
              baru agensi kreatif. Struktur kami yang lincah dan efisien
              mengedepankan solusi kreatif yang berkualitas dalam waktu singkat,
              dengan memangkas birokrasi dan memberikan Anda akses langsung
              kepada kreatif kami.
            </h4>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "MainHomeComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-main-home {
  display: flex;
  padding: 0px 10px;
  align-content: space-around;
  align-items: center;
  margin-top: 50px;
}
.box-ban {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  column-gap: 10px;
}
.box-ban .ban {
  grid-column: span 3;
  width: 100%;
}

.box-ban .ban img {
  width: 100%;
  object-fit: cover;
}

.wrapper-headline {
  text-align: left;
  padding: 20px;
}
.wrapper-headline h2 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 10px;
  letter-spacing: -4px;
  line-height: 70px;
}

.wrapper-headline h4 {
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -2px;
  line-height: 40px;
}
.p-relative {
  position: relative;
}

.box-headline {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 100px;
}
.box-headline .headline:nth-child(1) {
  grid-column: span 8;
  width: 100%;
}
.box-headline .headline:nth-child(2) {
  grid-column: span 4;
  width: 100%;
}

.headline p {
  font-weight: 500;
  font-size: 16px;
}
.headline a {
  text-decoration: none;
  color: #161615;
}
.headline a:hover {
  color: #ff008c;
}

@media (max-width: 992px) {
  .box-headline .headline:nth-child(1) {
    grid-column: span 8;
    margin-bottom: 30px;
  }
  .box-headline .headline:nth-child(2) {
    grid-column: span 4;
  }
  .box-headline .headline:nth-child(3) {
    grid-column: span 4;
  }
  .wrapper-main-home {
    padding: 0px 10px;
  }
  .wrapper-headline {
    text-align: left;
    padding: 20px 10px;
  }
}

@media (max-width: 710px) {
  .box-headline {
    column-gap: 20px;
  }
  .box-headline .headline:nth-child(2) {
    grid-column: span 8;
    margin-bottom: 30px;
  }
  .wrapper-headline h2 {
    font-size: 50px;
  }
  .box-headline .headline:nth-child(3) {
    grid-column: span 8;
  }
  .wrapper-content {
    margin-top: 0px;
  }
  .box-headline .headline:nth-child(3) {
    line-height: 35px;
  }
  .wrapper-headline h4 {
    font-size: 24px;
  }
}

@media (max-width: 400px) {
  .wrapper-headline h2 {
    font-size: 47px;
  }
  .wrapper-headline h4 {
    font-size: 20px;
  }
}

@media (max-width: 370px) {
  .wrapper-headline h2 {
    font-size: 44px;
  }
  .wrapper-headline h4 {
    font-size: 20px;
  }
}

@media (max-width: 360px) {
  .wrapper-headline h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 29px;
    margin-bottom: 10px;
    letter-spacing: 0px;
    line-height: 35px;
  }
  .wrapper-headline h4 {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 30px;
  }
  .wrapper-main-home {
    padding: 0px 5px;
  }
  .wrapper-headline {
    text-align: left;
    padding: 20px 5px;
  }
}

@media (max-width: 250px) {
  .wrapper-headline h2 {
    font-size: 26px;
  }
  .wrapper-headline h4 {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
