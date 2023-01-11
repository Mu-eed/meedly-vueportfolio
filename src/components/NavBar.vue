<template>
    <nav class="navbar navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <ul class="nav-links">
          <li class="social-icon">
            <a class="link text-black" href="https://www.instagram.com/mumueedo/?hl=en"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </li>
          <li class="social-icon">
            <a class="link text-black" href="https://twitter.com/hiEedo?t=yqITF9EXug_znhW8uRVD9Q&s=09"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <!-- <li class="social-icon">
            <a class="link text-black" href="https:://discordapp.com/users/616323066083016861" target="_blank"
              ><i class="fa-brands fa-discord"></i
            ></a>
          </li> -->
          <li class="social-icon">
            <a class="link text-black" href="https://m.youtube.com/c/DriftSLAYS"
              ><i class="fa-brands fa-youtube"></i
            ></a>
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
          <div class="offcanvas-body">
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
                <a class="nav-link" href="#education">Education</a>
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
</style>