<template>
  <div class="wrapper-contact">
    <div class="container">
      <div class="box-contact">
        <div class="contact">
          <h2>GET IN TOUCH !</h2>
          <form
            id="form"
            class="topBefore show-pop"
            @submit.prevent="submitForm"
          >
            <input
              id="name"
              type="text"
              placeholder="NAMA"
              autocomplete="off"
              v-model="form.name"
              required
            />
            <input
              id="email"
              type="text"
              placeholder="E-MAIL"
              autocomplete="off"
              v-model="form.email"
              required
            />
            <input
              id="phone"
              type="number"
              placeholder="PHONE NUMBER / WHATSAPP"
              autocomplete="off"
              v-model="form.phone"
              required
            />
            <textarea
              id="message"
              type="text"
              placeholder="PESAN"
              v-model="form.message"
              required
            ></textarea>
            <input id="submit" type="submit" value="KIRIM!" />
          </form>
        </div>
        <div class="contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.164765730014!2d106.7991320749051!3d-6.242004393746312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ee80e112d1%3A0x463afee9ed5e3470!2sKoontjie!5e0!3m2!1sid!2sid!4v1690948539437!5m2!1sid!2sid"
            width="100%"
            height="250"
            style="border: 0; border-radius: 10px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
          <div class="contact-info">
            <i class="bx bx-map"></i>
            <span>
              Jl. Falatehan I No.38, RT.2/RW.1, Melawai, Kec. Kby. Baru, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
            </span>
          </div>
          <div class="contact-info">
            <i class="bx bx-envelope"></i>
            <span>
              <a href="mailto:ranti@koontjie.id"> ranti@koontjie.id </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { postContent } from "@/api/koontjie";

export default {
  name: "ContactComp",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      isSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      const tempData = {
        name: this.form.name,
        email: this.form.email,
        phone_number: this.form.phone,
        messages: this.form.message,
      };
      const getResponse = await postContent("contact", tempData);
      if (getResponse.status == 200) {
        alert("Pesan berhasil terkirim!");
      } else {
        alert("Pesan gagal dikirim");
      }
    },
  },
};
</script>

<style>
.wrapper-contact {
  margin: 90px 0px 50px 0px;
  padding: 0px 10px;
}
.wrapper-contact input::-webkit-input-placeholder,
.wrapper-contact textarea::-webkit-input-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

.wrapper-contact input:focus::-webkit-input-placeholder,
.wrapper-contact textarea:focus::-webkit-input-placeholder {
  color: #bbb5af;
}

.wrapper-contact input::-moz-placeholder,
.wrapper-contact textarea::-moz-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

.wrapper-contact input:focus::-moz-placeholder,
.wrapper-contact textarea:focus::-moz-placeholder {
  color: #bbb5af;
}

.wrapper-contact input::placeholder,
.wrapper-contact textarea::placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

.wrapper-contact input:focus::placeholder,
.wrapper-contact textarea::focus:placeholder {
  color: #bbb5af;
}

.wrapper-contact input::-ms-placeholder,
.wrapper-contact textarea::-ms-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

.wrapper-contact input:focus::-ms-placeholder,
.wrapper-contact textarea:focus::-ms-placeholder {
  color: #bbb5af;
}

/* on hover placeholder */

.wrapper-contact input:hover::-webkit-input-placeholder,
.wrapper-contact textarea:hover::-webkit-input-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

.wrapper-contact input:hover:focus::-webkit-input-placeholder,
.wrapper-contact textarea:hover:focus::-webkit-input-placeholder {
  color: #cbc6c1;
}

.wrapper-contact input:hover::-moz-placeholder,
.wrapper-contact textarea:hover::-moz-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

.wrapper-contact input:hover:focus::-moz-placeholder,
.wrapper-contact textarea:hover:focus::-moz-placeholder {
  color: #cbc6c1;
}

.wrapper-contact input:hover::placeholder,
.wrapper-contact textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

.wrapper-contact input:hover:focus::placeholder,
.wrapper-contact textarea:hover:focus::placeholder {
  color: #cbc6c1;
}

.wrapper-contact input:hover::placeholder,
.wrapper-contact textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

.wrapper-contact input:hover:focus::-ms-placeholder,
.wrapper-contact textarea:hover::focus:-ms-placeholder {
  color: #cbc6c1;
}
.wrapper-contact #form {
  position: relative;
  width: 100%;
  margin: 40px auto 50px auto;
}

.wrapper-contact input {
  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  width: 100%;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #726659;

  border: solid 1px #b3aca7;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

.wrapper-contact input:hover {
  background: #b3aca7;
  color: #e2dedb;
}

.wrapper-contact textarea {
  width: 100%;
  height: 110px;
  max-height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #726659;
  font-family: "Lato", sans-serif;
  font-size: 0.875em;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

.wrapper-contact textarea:hover {
  background: #b3aca7;
  color: #e2dedb;
}

.wrapper-contact #submit {
  width: 100%;

  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  color: #b3aca7;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;
  border-top: none;
}

.wrapper-contact #submit:hover {
  color: #e2dedb;
}

.box-contact {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
}
.box-contact .contact {
  grid-column: span 4;
  width: 100%;
}

.contact-info {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 20px;
  color: #161615;
}

.contact-info i {
  font-size: 42px;
  display: inline-block;
  margin-right: 10px;
}

.contact-info a {
  text-decoration: none;
  color: #161615;
}

.contact-info {
  line-height: 25px;
}

.contact h2 {
  font-size: 32px;
  text-align: left;
  margin-bottom: 0px;
}
@media (max-width: 768px) {
  .box-contact .contact {
    grid-column: span 8;
    width: 100%;
  }
  .wrapper-contact #form {
    position: relative;
    width: 100%;
    margin: 40px auto 50px auto;
  }
}
</style>
