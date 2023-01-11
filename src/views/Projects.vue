<template>
    <section id="projects" class="flex-height-fix">
      <div class="section gradient">
        <div class="project-header">
        <h1 class="text-center title-heading">Projects</h1>
        </div>
        <div class="container">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href="https://funny-mandazi-d20265.netlify.app"><img
                  src="./assets/cynobarg.jpg"
                  class="d-block w-100"
                  alt="..."
                /></a>
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-txt">Cyno's Bargains</h5>
                  <p class="carousel-txt">
                    An e-commerce website I am working on about an in-game
                    store.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <a href="https://eclectic-sunflower-7ceb50.netlify.app"
                  ><img
                    src="./assets/yoi_proj9.jpg"
                    class="d-block w-100"
                    alt="..."
                /></a>
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-txt">Yoimiya</h5>
                  <p class="carousel-txt">
                    A website I made, mostly containing Bootstrap, about my
                    Genshin main.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <a href="https://timely-semifreddo-ec46ea.netlify.app"
                  ><img
                    src="./assets/ps-stars.jpg"
                    class="d-block w-100"
                    alt="..."
                /></a>
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-txt">PlayStation Stars</h5>
                  <p class="carousel-txt">
                    A replica of the PlayStation Stars website.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style>
    .section.gradient {
        overflow: hidden;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #f2f3f5;
        background-image: linear-gradient(
          40deg,
          #4d6363,
          #9aabab,
          #f5f0f0,
          rgb(214, 214, 214)
        );
        backdrop-filter: blur(10px);
      }

      .section.gradient2 {
        overflow: hidden;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #f2f3f5;
        background-image: linear-gradient(
          40deg,
          rgb(214, 214, 214),
          #f5f0f0,
          #9aabab,
          #4d6363
        );
        backdrop-filter: blur(10px);
      }

      .carousel-txt {
        text-shadow: 1px 2px #000000;
      }
</style>