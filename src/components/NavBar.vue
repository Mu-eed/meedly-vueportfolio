<template>
    <nav class="navbar navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <ul class="nav-links">
          <li class="social-icon">
            <a class="link text-black" href="https://www.instagram.com/mumueedo/?hl=en"
              ><button class="nav-btn"><i class="fa-brands fa-instagram"></i
            ></button></a>
          </li>
          <li class="social-icon">
            <a class="link text-black" href="https://twitter.com/hiEedo?t=yqITF9EXug_znhW8uRVD9Q&s=09"><button class="nav-btn2"><i class="fa-brands fa-twitter"></i></button></a>
          </li>
          <!-- <li class="social-icon">
            <a class="link text-black" href="https:://discordapp.com/users/616323066083016861" target="_blank"
              ><i class="fa-brands fa-discord"></i
            ></a>
          </li> -->
          <li class="social-icon">
            <a class="link text-black" href="https://m.youtube.com/c/DriftSLAYS"
              ><button class="nav-btn3"><i class="fa-brands fa-youtube"></i
            ></button></a>
          </li>
        </ul>
        <a class="navbar-brand logo text-center" href="#">Meedly</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body proj-text">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Contact">Contact Me</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
.nav-img {
  width: 40px;
  height: 40px;
  margin-right: auto;
  /* margin-bottom: 30px; */
  margin-left: auto;
}

.nav-btn {
  border-radius: 50%;
  background-color: white;
}

.nav-btn2 {
  border-radius: 50%;
  background-color: white;
}

.nav-btn3 {
  border-radius: 50%;
  background-color: white;
}

.nav-btn:hover {
  background-image: linear-gradient(40deg, rgb(243, 170, 25), rgb(255, 0, 221), rgb(69, 0, 188));
  color: rgb(255, 255, 255);
  transition: 0.5s;
}

.nav-btn2:hover {
  background-color: rgb(45, 215, 215);
  color: white;
  transition: 0.5s;
}

.nav-btn3:hover {
  background-color: red;
  color: white;
  transition: 0.5s;
}
</style>