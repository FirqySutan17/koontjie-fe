<template>
  <transition name="fade">
    <div :class="{ loader: true, fadeout: !isLoading }">
      <div class="caption-in">
        <img src="@/assets/images/icon-rimba.png" alt="" />
        <h2>Rimba House</h2>
        <p>Wilderness with amazing business opportunities</p>
      </div>
      <img src="@/assets/images/leaves.png" alt="" class="leaves" />
      <div class="tagline">
        <h2>
          <span class="hakuna">Hakuna</span> <span class="matata">Matata</span>
        </h2>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PreloaderComp",
  props: ["isLoading"],
};
</script>

<style>
.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    79.08% 79.08% at 50% 50%,
    #9cecd9 0%,
    #21918a 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11500;
  overflow: hidden;
  animation: pre-loader 5s;
}
.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.loader .leaves {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2.4);
  animation: wide-open 4s;
  opacity: 0;
}
.caption-in {
  position: absolute;
  text-align: center;
  margin: auto;
  animation: slide-in 4s;
  opacity: 0;
  width: 95%
}
.caption-in img {
  width: 15%;
  margin-bottom: 10px;
}
.caption-in h2 {
  font-family: "League Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  color: #002744;
  margin-bottom: 10px;
  
}
.caption-in p {
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  font-family: "League Spartan", sans-serif;
  color: #002744;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.tagline {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11550;
  opacity: 0;
  animation: hakuna 6s;
  animation-delay: 3.5s;
  padding: 0px 50px;
}
.tagline h2 {
  font-family: "League Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 55px;

  color: #03808e;
  position: absolute;
}
.tagline h2 .hakuna {
  color: #03808e;
}
.tagline h2 .matata {
  color: #dfae00;
}
@keyframes pre-loader {
  0% {
    background: #0b4f4a;
  }
  50% {
    background: #0b4f4a;
  }
  100% {
    background: radial-gradient(
      79.08% 79.08% at 50% 50%,
      #9cecd9 0%,
      #21918a 100%
    );
  }
}
@keyframes wide-open {
  from {
    opacity: 0;
    transform: scale(1.5);
  }
  to {
    opacity: 1;
    transform: scale(2.4);
  }
}
@keyframes slide-in {
  from {
    opacity: 0;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  to {
    opacity: 1;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
@keyframes hakuna {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 1200px) {
  .leaves {
    display: none;
  }
}
</style>
