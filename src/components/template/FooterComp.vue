<template>
  <div class="container">
    <div class="wrapper-footer">
      <div class="footer">
        <p>KOONTJIE</p>
        <p>CREATIVE COLLECTIVE</p>
        <p>JAKARTA, INDONESIA</p>
      </div>
      <div class="footer">
        <p>NEW BUSINESS</p>
        <p>RANTI INDRASWARI</p>
        <p><a href="mailto:ranti@koontjie.id">RANTI@KOONTJIE.ID</a></p>
      </div>
      <div class="footer">
        <p>FOLLOW</p>
        <p><a href="#">INSTAGRAM</a></p>
        <p><a href="#">LINKEDIN</a></p>
      </div>
      <div class="footer">
        <p>A MEMBER OF PINC GROUP OF COMPANIES</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    msg: String,
  },
};
</script>

<style>
.wrapper-footer {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
  padding: 20px;
}
.wrapper-footer .footer {
  grid-column: span 2;
  text-align: left;
}
.wrapper-footer .footer p {
  font-weight: 500;
  color: #161615;
  line-height: 22.5px;
  font-size: 14px;
}
.wrapper-footer .footer a {
  text-decoration: none;
  color: #161615;
  font-size: 14px;
}
.wrapper-footer .footer a:hover {
  text-decoration: none;
  color: #ff008c;
}
.wrapper-footer .footer:nth-child(4) {
  position: relative;
  vertical-align: middle;
  margin: auto;
  font-weight: 700;
}
.wrapper-footer .footer:nth-child(4) p {
  font-weight: 700;
}
@media (max-width: 1200px) {
  .wrapper-footer .footer p {
    font-size: 16px;
  }
  .wrapper-footer .footer a {
    font-size: 16px;
  }
}

@media (max-width: 992px) {
  .wrapper-footer .footer p {
    font-size: 14px;
  }
  .wrapper-footer .footer a {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .wrapper-footer .footer {
    grid-column: span 4;
  }
  .wrapper-footer .footer:nth-child(1),
  .wrapper-footer .footer:nth-child(2) {
    margin-bottom: 20px;
  }
  .wrapper-footer .footer:nth-child(4) p {
    text-align: left;
  }
}

@media (max-width: 300px) {
  .wrapper-footer .footer {
    grid-column: span 8;
    text-align: center;
  }
  .wrapper-footer .footer:nth-child(3) {
    margin-bottom: 20px;
  }
  .wrapper-footer .footer:nth-child(4) p {
    text-align: center;
  }
}
</style>
