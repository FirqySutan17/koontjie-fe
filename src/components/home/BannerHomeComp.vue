<template>
  <div class="wrapper-header">
    <div class="header-bg-home box-tape">
      <audio id="myMix1">
        <source src="https://koontjie.id/audio/mix-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix2">
        <source src="https://koontjie.id/audio/mix-2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix3">
        <source src="https://koontjie.id/audio/mix-3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix4">
        <source src="https://koontjie.id/audio/mix-4.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix5">
        <source src="https://koontjie.id/audio/mix-5.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix6">
        <source src="https://koontjie.id/audio/mix-6.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix7">
        <source src="https://koontjie.id/audio/mix-7.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myMix8">
        <source src="https://koontjie.id/audio/mix-8.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-1" @click="mix1Play()">
          <img src="@/assets/images/home/tape-1.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-2" @click="mix2Play()">
          <img src="@/assets/images/home/tape-2.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-3" @click="mix3Play()">
          <img src="@/assets/images/home/tape-3.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-4" @click="mix4Play()">
          <img src="@/assets/images/home/tape-4.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-5" @click="mix5Play()">
          <img src="@/assets/images/home/tape-5.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-6" @click="mix6Play()">
          <img src="@/assets/images/home/tape-6.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-7" @click="mix7Play()">
          <img src="@/assets/images/home/tape-7.png" alt="" />
        </button>
      </div>
      <div class="tape">
        <button class="btn btn-primary btn-sm mix-8" @click="mix8Play()">
          <img src="@/assets/images/home/tape-8.png" alt="" />
        </button>
      </div>
    </div>
    <div class="header-tagline-home">
      <h1>MUSIK ADALAH KOONTJIE</h1>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

var mix1 = document.getElementById("myMix1");
var mix2 = document.getElementById("myMix2");
var mix3 = document.getElementById("myMix3");
var mix4 = document.getElementById("myMix4");
var mix5 = document.getElementById("myMix5");
var mix6 = document.getElementById("myMix6");
var mix7 = document.getElementById("myMix7");
var mix8 = document.getElementById("myMix8");

export default {
  name: "BannerHomeComp",
  props: {
    msg: String,
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    mix1Play(mix1) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");
      mix1.play();
      mix2.pause();
      mix3.pause();
      mix4.pause();
      mix5.pause();
      mix6.pause();
      mix7.pause();
      mix8.pause();
    },
    mix2Play(mix2) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix2.play();
      mix3.pause();
      mix4.pause();
      mix5.pause();
      mix6.pause();
      mix7.pause();
      mix8.pause();
    },
    mix3Play(mix3) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix3.play();
      mix2.pause();
      mix4.pause();
      mix5.pause();
      mix6.pause();
      mix7.pause();
      mix8.pause();
    },
    mix4Play(mix4) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix4.play();
      mix3.pause();
      mix2.pause();
      mix5.pause();
      mix6.pause();
      mix7.pause();
      mix8.pause();
    },
    mix5Play(mix5) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix5.play();
      mix3.pause();
      mix4.pause();
      mix2.pause();
      mix6.pause();
      mix7.pause();
      mix8.pause();
    },
    mix6Play(mix6) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix6.play();
      mix3.pause();
      mix4.pause();
      mix5.pause();
      mix2.pause();
      mix7.pause();
      mix8.pause();
    },
    mix7Play(mix7) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix7.play();
      mix3.pause();
      mix4.pause();
      mix5.pause();
      mix6.pause();
      mix2.pause();
      mix8.pause();
    },
    mix8Play(mix8) {
      var mix1 = document.getElementById("myMix1");
      var mix2 = document.getElementById("myMix2");
      var mix3 = document.getElementById("myMix3");
      var mix4 = document.getElementById("myMix4");
      var mix5 = document.getElementById("myMix5");
      var mix6 = document.getElementById("myMix6");
      var mix7 = document.getElementById("myMix7");
      var mix8 = document.getElementById("myMix8");

      mix1.pause();
      mix8.play();
      mix3.pause();
      mix4.pause();
      mix5.pause();
      mix6.pause();
      mix7.pause();
      mix2.pause();
    },
  },
};
</script>

<style>
.wrapper-header {
  display: block;
  height: 100vh;
}
.header-bg-home {
  object-fit: cover;
  width: 100%;
  margin: 0;
  background: #0000ff;
  height: 90vh;
  padding: 20px;
}

button {
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
}

.box-tape {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 20px;
}

.box-tape .tape {
  grid-column: span 2;
  width: 100%;
  margin: auto;
}

.box-tape .tape img {
  object-fit: cover;
  width: 100%;
}

.header-tagline-home {
  margin: 0;
  height: 141px;
  background-color: #0000ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  height: 10vh;
}
.header-tagline-home h1 {
  letter-spacing: 45px;
  font-weight: 700;
  font-size: 35px;

  color: #ff008c;
}
@media (max-width: 1400px) {
  .header-tagline-home h1 {
    font-size: 24px;
  }
}

@media (max-width: 1200px) {
  .header-tagline-home h1 {
    letter-spacing: 30px;
    line-height: 50px;
  }
  .box-work {
    -moz-column-gap: 50px;
    column-gap: 50px;
  }
}

@media (max-width: 992px) {
  .box-tape .tape {
    grid-column: span 4;
  }
  .header-bg-home {
    height: auto;
  }
  .header-tagline-home {
    height: auto;
    padding-bottom: 20px;
  }
}

@media (max-width: 780px) {
  .header-tagline-home h1 {
    margin-left: 37px;
  }
  .wrapper-menu ul li a {
    padding: 0px;
  }
  .wrapper-header {
    height: auto;
  }
  .header-bg {
    height: auto;
  }

  .header-tagline-home {
    height: auto;
  }

  .headline p {
    font-size: 18px !important;
  }
}

@media (max-width: 600px) {
  .header-tagline-home h1 {
    letter-spacing: 25px;
  }
}

@media (max-width: 300px) {
  .header-tagline-home h1 {
    letter-spacing: 10px;
  }
  .header-tagline-home h1 {
    margin-left: 15px;
  }
  .header-bg-home {
    padding: 10px 5px;
  }
}
</style>
