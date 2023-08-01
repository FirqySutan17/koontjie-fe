<template>
  <section id="about">
    <div class="container">
      <div class="wrapper-main">
        <div class="p-relative">
          <h2>HELLO! KAMI ADALAH KOONTJIEAN</h2>
          <h4>
            Kami adalah orang - orang yang diandalkan untuk solusi kreatif,<br />
            dengan dukungan puluhan tahun pengalaman dan berbagai pengakuan dari
            industri kreatif.
          </h4>
        </div>
      </div>
      <div class="wrapper-founders">
        <div class="founders">
          <p class="name-founders">Yohannes Muliady</p>
          <p class="role-founders">Chief Executive Officer</p>
          <p class="caption-founders">
            Sebagai seorang kreatif yang selalu mengedepankan kesederhanaan
            namun tetap berakar pada relevansi selama lebih dari dua dekade,
            Yohannes telah mengemban peran kepemimpinan kunci, terutama di Mata
            Angin Creative Agency sebagai Creative Director, Executive Creative
            Director, dan Chief Creative Officer. Di bawah bimbingannya, ia
            menginisiasi pertumbuhan yang luar biasa di agensi tersebut hingga
            dinobatkan sebagai #3 Hottest Indonesian Agency dalam daftar
            Campaign Brief 2021. <br /><br />
            Selain pengalaman bekerja sama dengan klien-klien terkemuka seperti
            IM3 Ooredoo, Bank Jago, Adira Finance, dan Bank BCA, Ia juga
            memimpin tim kreatif di Pantarei Communications dan Roundtable
            Communication yang berkontribusi pada kampanye-kampanye sukses untuk
            Bank Danamon, elektronik LG, dan Tri Indonesia. <br />
            <br />
            Yohannes telah mendapatkan berbagai penghargaan dan pengakuan dalam
            industri, dimana karyanya telah diterima di The Work oleh Campaign
            Brief, memenangkan Citra Pariwara, Crystal Award Adstars Busan, MMA
            Gold & Silver Awards, serta penghargaan dari YouTube Ads Leaderboard
            dan Pinansthika Award Festival.
          </p>
          <img class="img-founders" src="@/assets/images/Yohannes.png" alt="" />
        </div>
        <div class="founders">
          <p class="name-founders">Aditiyawarman (Daseng)</p>
          <p class="role-founders">Chief Operation Officer</p>
          <p class="caption-founders">
            Aditiyawarman memulai perjalanan kreatifnya pada tahun 2002 sebagai
            desainer grafis di Flame, yang membuka jalannya untuk beralih ke
            Pantarei pada tahun 2005,dan mengemban peran sebagai desainer grafis
            senior yang mengawasi berbagai brand di sektor Telco, F&B, dan
            Perbankan. <br /><br />
            Dari tahun 2008 hingga 2014, Aditiyawarman sebagai direktur desain
            untuk DesignHub di Pantarei, memimpin pengembangan divisi branding.
            Kontribusinya termasuk dalam membangun merek-merek ternama seperti
            Grand Indonesia, ARTOTEL, Padma Hotel, Breadlife, Blibli, Anteraja,
            dan Adira Finance. Bergabung dengan Mata Angin pada tahun 2015,
            Aditiyawarman memberikan kontribusi signifikan bagi pertumbuhan
            agensi tersebut dan ditunjuk sebagai Kepala Operasional pada tahun
            2018. Ia berperan aktif dalam mendorong kesuksesan perusahaan hingga
            tahun 2022. <br /><br />
            Setelah mengecap pengalaman selama lebih dari 21 tahun sebagai
            seorang kreatif, manajer operasional, dan account service, pada
            tahun 2022 Aditiyawarman, bersama dengan rekan-rekan lamanya dari
            Pantarei dan Mata Angin, memulai Koontjie, sebuah entitas baru
            berbasis kolektivitas kreatif di dalam PINC Group.
          </p>
          <img
            class="img-founders"
            src="@/assets/images/Aditiyawarman.png"
            alt=""
          />
        </div>
        <div class="founders">
          <img class="img-founders" src="@/assets/images/Anton.png" alt="" />
          <p class="name-founders">ANTON YUDHISTIRA POE (Ipong)</p>
          <p class="role-founders">Chief Creative Officer</p>
          <p class="caption-founders">
            Dengan pengalaman sebagai kreatif selama lebih dari 12 tahun di
            industri periklanan, Sepanjang karirnya Ipong selalu percaya
            terhadap kesinambungan dalam mengikuti tren yang dikombinasikan
            dengan pemahaman dalam kompleksitas perilaku manusia. Kepercayaan
            ini yang memungkinkan Ipong dalam menciptakan berbagai kampanye
            untuk merek-merek terkenal di industri telekomunikasi dan bir.
            <br />
            <br />
            Kontribusi dan dedikasi Ipong tidak luput dari perhatian di industri
            kreatif. Ia telah mendapatkan berbagai penghargaan dan pengakuan,
            termasuk diterima di Campaign Brief Work yang bergengsi, penghargaan
            Citra Pariwara, AdStars Busan Crystal Award, serta MMA Gold dan
            Silver Awards. Karyanya juga telah dikenal di YouTube Leaderboard.
          </p>
        </div>
        <div class="founders">
          <img class="img-founders" src="@/assets/images/Ranti.png" alt="" />
          <p class="name-founders">Ranti Indraswari</p>
          <p class="role-founders">Project Manager</p>
          <p class="caption-founders">
            Yohannes is a creative who champions simplicity while staying rooted
            in relevancy and insight. With a career spanning over two decades,
            he has held key leadership roles, notably at Mata Angin Creative
            Agency, including Creative Director, Executive Creative Director,
            and Chief Creative Officer. Under his guidance, he sets in motion
            remarkable growth at the agency, securing its position as the third
            hottest Indonesian agency on Campaign Brief's 2021 list.
            <br /><br />
            Yohannes collaborated with prominent clients such as IM3 Ooredoo,
            Bank Jago, Adira Finance, and BCA Bank. He also led creative teams
            at Pantarei Communications and Roundtable Communication,
            contributing to successful campaigns for Danamon Bank, LG
            electronics, and Tri Indonesia. <br /><br />
            He has been honored with numerous industry awards, including
            acceptance into The Work by Campaign Brief for various categories,
            Citra Pariwara Bronze awards, an Adstars Busan Crystal award, MMA
            Gold and Silver awards, and recognition in the YouTube Ads
            Leaderboard and Pinansthika Award Festival.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "MainComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-main {
  display: flex;
  text-align: left;
  padding: 0px 20px;
  line-height: 35px;
  height: 30vh;
  align-content: space-around;
  align-items: center;
}

.wrapper-main h2 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 10px;
}

.wrapper-main h4 {
  font-weight: 500;
  font-size: 24px;
}
.p-relative {
  position: relative;
}

.wrapper-founders {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 20px;
}

.wrapper-founders .founders {
  grid-column: span 2;
  text-align: left;
  width: 100%;
}

.founders .img-founders {
  object-fit: cover;
  width: 100%;
}

.founders .name-founders {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}
.founders .role-founders {
  font-size: 16px;
  font-style: italic;
  text-transform: capitalize;
  margin-bottom: 20px;
}

.founders .caption-founders {
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 22.5px;
}

.founders:nth-child(2) {
  margin-top: 220px;
}
.founders:nth-child(3) {
  margin-top: 110px;
}
.founders:nth-child(4) {
  margin-top: 480px;
}
.founders:nth-child(3) .name-founders,
.founders:nth-child(4) .name-founders {
  margin-top: 20px;
}
@media (max-width: 1440px) {
  .founders:nth-child(3) {
    margin-top: 50px;
  }
}

@media (max-width: 1400px) {
  .founders .caption-founders {
    font-size: 14px;
    line-height: 22.5px;
  }
}
@media (max-width: 1280px) {
  .founders .name-founders {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
}
@media (max-width: 1200px) {
  .wrapper-founders .founders {
    grid-column: span 4;
    text-align: left;
    width: 100%;
  }
  .founders:nth-child(3) {
    margin-top: 0px;
  }
  .founders:nth-child(4) {
    margin-top: 560px;
  }

  .founders .name-founders {
    font-size: 18px;
  }
  .founders .caption-founders {
    font-size: 16px;
  }
}

@media (max-width: 1100px) {
  .wrapper-main h4 {
    font-size: 22px;
  }
  .wrapper-last h4 {
    font-size: 22px;
  }
}
@media (max-width: 992px) {
  .founders:nth-child(4) {
    margin-top: 380px;
  }
  .founders:nth-child(2) {
    margin-top: 315px;
  }
  .wrapper-main h4 {
    font-size: 24px;
  }
  .wrapper-last h4 {
    font-size: 24px;
  }
}

@media (max-width: 780px) {
  .founders:nth-child(2) {
    margin-top: 265px;
  }
  .founders:nth-child(4) {
    margin-top: 350px;
  }
}
@media (max-width: 600px) {
  .wrapper-main {
    height: 40vh;
    padding: 10px;
  }
  .wrapper-founders {
    padding: 10px;
  }
  .wrapper-main h4 {
    font-size: 20px;
  }
  .wrapper-last h4 {
    font-size: 20px;
  }
  .menus.date-style span {
    left: 0px;
  }
  .wrapper-founders .founders {
    grid-column: span 8;
    text-align: left;
    width: 100%;
  }
  .founders:nth-child(2) {
    margin-top: 100px;
  }
  .founders:nth-child(3) {
    margin-top: 100px;
  }
  .founders:nth-child(4) {
    margin-top: 100px;
  }
  .wrapper-main h2 {
    font-size: 27px;
  }
  .wrapper-main h4 {
    font-size: 22px;
  }
}

@media (max-width: 300px) {
  .wrapper-main {
    height: auto;
    padding: 10px 5px;
  }

  .wrapper-founders {
    padding: 10px 5px;
  }
}
</style>
