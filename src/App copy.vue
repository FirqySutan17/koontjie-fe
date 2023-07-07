<template>
  <header class="desktop">
    <router-link to="/" class="logo"
      ><img src="../public/images/logo-rimba.png" alt="" />
    </router-link>
    <ul>
      <li>
        <router-link to="/" data-hover="Home" class="nav-item active"
          ><span class="active">My RIMBA</span></router-link
        >
      </li>
      <li>
        <router-link to="/" data-hover="About Us" class="nav-item"
          ><span>Cave</span></router-link
        >
      </li>
      <li>
        <router-link to="/" data-hover="Service" class="nav-item"
          ><span>Ecosystem</span></router-link
        >
      </li>
      <li>
        <router-link to="/" data-hover="Portfolio" class="nav-item"
          ><span>Cultivation</span></router-link
        >
      </li>
      <li>
        <router-link to="/" data-hover="Events" class="nav-item"
          ><span>Survival</span></router-link
        >
      </li>
      <li>
        <router-link to="/" data-hover="Career" class="nav-item"
          ><span>Hunt</span>
        </router-link>
      </li>

      <li>
        <router-link to="/" data-hover="Blog" class="nav-item"
          ><span>Hut</span>
        </router-link>
      </li>
    </ul>
  </header>

  <header class="mobile">
    <nav class="nav-mobile">
      <router-link to="/" class="logo"
        ><img src="../public/images/logo-rimba.png" alt="" />
      </router-link>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="bx bx-menu"></i>
      </label>
      <ul class="list-mobile">
        <li>
          <router-link to="/" data-hover="Home" class="nav-item active"
            ><span class="active">My RIMBA</span></router-link
          >
        </li>
        <li>
          <router-link to="/" data-hover="About Us" class="nav-item"
            ><span>Cave</span></router-link
          >
        </li>
        <li>
          <router-link to="/" data-hover="Service" class="nav-item"
            ><span>Ecosystem</span></router-link
          >
        </li>
        <li>
          <router-link to="/" data-hover="Portfolio" class="nav-item"
            ><span>Cultivation</span></router-link
          >
        </li>
        <li>
          <router-link to="/" data-hover="Events" class="nav-item"
            ><span>Survival</span></router-link
          >
        </li>
        <li>
          <router-link to="/" data-hover="Career" class="nav-item"
            ><span>Hunt</span>
          </router-link>
        </li>

        <li>
          <router-link to="/" data-hover="Blog" class="nav-item"
            ><span>Hut</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <router-view />
</template>

<style>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11000;
}
header img {
  width: 120px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style-type: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  padding: 6px 5px;
  font-size: 14px;
}
header ul li:nth-child(7) {
  margin-left: 40px;
}
header.mobile {
  display: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  font-size: 14px;
  width: 81px;
  font-family: "Skranji", cursive;
}

.nav-item.active {
  color: #ffa800;
}

.nav-item span.active {
  color: #ffa800;
}

.nav-item span {
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
}

.nav-item:before,
.nav-item:after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  -webkit-transition: 0s, opacity 0.3s;
  -moz-transition: 0s, opacity 0.3s;
  -o-transition: 0s, opacity 0.3s;
  transition: 0s, opacity 0.3s;
}
.nav-item:before {
  content: attr(data-hover);
  color: #9fbf5b;
}
.nav-item:after {
  content: attr(data-active);
}
.nav-item:hover span,
.nav-item:active span {
  opacity: 0;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  -ms-transform: scale(0.3);
  -o-transform: scale(0.3);
  transform: scale(0.3);
}
.nav-item:hover:before,
.nav-item:active:after {
  opacity: 1;
}
header ul li:nth-child(2) {
  margin-left: 5px;
}
header ul li:nth-child(3) {
  margin-left: 5px;
}
header ul li:nth-child(5) {
  margin-left: 15px;
}
header ul li:nth-child(6) {
  margin-left: 0px;
}
header ul li:nth-child(7) {
  margin-left: 10px;
}

/* Mobile Header */
.nav-mobile {
  display: flex;
  height: 80px;
  width: 100%;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav-mobile .logo {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
.nav-mobile ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.nav-mobile ul li {
  margin: 0 5px;
}
.nav-mobile ul li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
.nav-mobile ul li a.active,
.nav-mobile ul li a:hover {
  color: #111;
  background: #fff;
}
.nav-mobile .menu-btn i {
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"] {
  visibility: hidden;
}
/* End Mobile Header */
@media (max-width: 1200px) {
  header {
    padding: 0px 30px;
  }
}
@media (max-width: 1024px) {
  header {
    height: 80px;
  }
}

@media (max-width: 992px) {
  header.desktop {
    display: none;
  }
  header.mobile {
    display: block;
    position: fixed;
    background: #fff;
  }
  .nav-mobile .menu-btn i {
    display: block;
    font-size: 36px;
  }

  #click:checked ~ .menu-btn i:before {
    content: "\2715";
    color: #2c3e50;
    font-weight: 700;
  }
  .nav-mobile ul {
    position: fixed;
    top: 80px;
    left: -100%;
    background: #fff;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
    padding-top: 120px;
  }
  #click:checked ~ ul.list-mobile {
    left: 0;
  }
  .nav-mobile ul li {
    width: 100%;
    margin: 40px 0;
  }
  .nav-mobile ul li a {
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 26px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul.list-mobile li a {
    margin-left: 0px;
  }
  .nav-mobile ul li a.active,
  .nav-mobile ul li a:hover {
    background: none;
    color: cyan;
  }
  header ul li:nth-child(2) {
    margin-left: 0px;
  }
  header ul li:nth-child(3) {
    margin-left: 0px;
  }
  header ul li:nth-child(5) {
    margin-left: 0px;
  }
  header ul li:nth-child(7) {
    margin-left: 0px;
  }
}
</style>
