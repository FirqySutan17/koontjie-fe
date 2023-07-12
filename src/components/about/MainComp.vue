<template>
  <section id="about">
    <div class="container">
      <div class="wrapper-main">
        <div class="p-relative">
          <h2>HELLO! We ARE the Koontjieans.</h2>
          <h4>
            We ARE the Koontjieans. We are the go-to guys for creative
            solutions, backed with decades <br />
            of experience and various recognitions from the industry.
          </h4>
        </div>
      </div>
      <div class="wrapper-founders">
        <div class="founders">
          <p class="name-founders">Yohannes Muliady</p>
          <p class="role-founders">Chief Executive Officer</p>
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
          <img class="img-founders" src="@/assets/images/Yohannes.png" alt="" />
        </div>
        <div class="founders">
          <p class="name-founders">Aditiyawarman (Daseng)</p>
          <p class="role-founders">Chief Operating Officer</p>
          <p class="caption-founders">
            Aditiyawarman embarked on his creative journey in 2002 as a graphic
            designer at Flame, a small advertising agency. In 2005, he
            transitioned to Pantarei, assuming the role of senior graphic
            designer and overseeing diverse brands in the Telco, F&B, and
            Banking sectors.
            <br /><br />
            From 2008 to 2014, Aditiyawarman excelled as the design director for
            DesignHub at Pantarei, spearheading the development of the branding
            division. His contributions were instrumental in establishing
            renowned brands such as Grand Indonesia, ARTOTEL, Padma Hotel,
            Breadlife, Blibli, Anteraja, and Adira Finance. <br /><br />
            Joining Mata Angin in 2015, Aditiyawarman made significant
            contributions to the agency's growth and was appointed Head of
            Operations in 2018. He played an active role in driving the
            company's success until 2022.
            <br /><br />
            With over 21 years of experience as a creative, operational manager,
            and account servicing professional, in 2022 Aditiyawarman, together
            with his former colleagues from Pantarei and Mata Angin, embarked on
            the operation of Koontjie, a new venture within the esteemed PINC
            Group, showcasing their collective expertise and vision for the
            future.
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
            Ipong is a highly accomplished professional with 12 years of
            experience in the advertising agency industry. Throughout his
            career, he has demonstrated an exceptional ability to create
            outstanding work by staying attuned to trends and understanding the
            intricacies of human behavior. <br /><br />
            As a seasoned expert in the field, Ipong has successfully handled
            campaigns for renowned telco brands and beer brands. His deep
            understanding of consumer insights and market dynamics has allowed
            him to develop impactful and innovative advertising strategies that
            resonate with target audiences. <br /><br />
            Ipong's talent and dedication have not gone unnoticed in the
            industry. He has been honored with numerous accolades and industry
            awards, including acceptance into the prestigious Campaign Brief
            Work, Citra Pariwara, AdStars Busan Crystal Award, and MMA Gold and
            Silver Awards. His work has also gained recognition in the YouTube
            Leaderboard, further solidifying his reputation as a top-tier
            advertising professional.
            <br /><br />
            Known for his creative flair and strategic thinking, Ipong
            continuously pushes boundaries and strives for excellence in every
            project he undertakes. He thrives in dynamic and fast-paced
            environments, leveraging his vast experience and expertise to
            deliver exceptional results for his clients. <br /><br />
            With a passion for his craft and an unwavering commitment to
            producing outstanding work, Ipong consistently demonstrates his
            ability to bring brands to life through impactful and engaging
            advertising campaigns. He is a valuable asset to any team, combining
            his industry knowledge, trend-spotting skills, and understanding of
            human psychology to create powerful brand experiences that leave a
            lasting impression.
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
