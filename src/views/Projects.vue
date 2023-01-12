<template>
    <section id="projects" class="flex-height-fix">
        <div class="project-header">
        <h1 class="text-center title-heading">Projects</h1>
        </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/RFc7jY0R/yoi-proj9.jpg">
                  <h4 class="proj-text text-black">Naganohara Yoimiya</h4>
                  <p class="smol-text text-black">A website I made with Bootstrap about my Genshin Impact main.</p>
                  <div class="text-black" id="proj-icons"><a href="https://eclectic-sunflower-7ceb50.netlify.app"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/Yoimiya"><button class="proj-btn"><i class="fa-brands fa-github-alt"></i></button></a></div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/t4R0stj2/my-port.png">
                  <h4 class="proj-text text-black">My first portfolio</h4>
                  <p class="smol-text text-black">My first portfolio that I made with Bootstrap, HTML & CSS.</p>
                  <div class="text-black" id="proj-icons"><a href="https://mueedbrown.netlify.app/"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/Portfolio-Project"><button class="proj-btn"><i class="fa-brands fa-github-alt"></i></button></a></div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/RZpxHs4X/playstation-stars-1170x585.jpg">
                  <h4 class="proj-text text-black">PlayStation™ Stars Replica</h4>
                  <p class="smol-text text-black">A replica of the official PlayStation Stars website.</p>
                  <div class="text-black" id="proj-icons"><a href="https://timely-semifreddo-ec46ea.netlify.app"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/PlayStation-Stars"><button class="proj-btn"><i class="fa-brands fa-github-alt"></i></button></a></div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/NFQrHfxh/mb-js-calc.png">
                  <h4 class="proj-text text-black">JavaScript Calculator</h4>
                  <p class="smol-text text-black">A calculator project I made with JavaScript.</p>
                  <div class="text-black" id="proj-icons"><a href="https://mueeds-calculator.netlify.app/"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/My-JS-Calculator"><button class="proj-btn"><i class="fa-brands fa-github-alt"></i></button></a></div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/SxX7qdQw/g1lol.png">
                  <h4 class="proj-text text-black">Gamers First</h4>
                  <p class="smol-text text-black">An e-commerce project I made with JavaScript. (not complete)</p>
                  <div class="text-black" id="proj-icons"><a href="https://mueed-pos-js.netlify.app"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/JS-End-of-Module"><button class="proj-btn"><i class="fa-brands fa-github-alt"></i></button></a></div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card p-3 m-4">
                  <img class="proj-img img-fluid" src="https://i.postimg.cc/mgJqGVMn/netflix.png">
                  <h4 class="proj-text text-black">Netflix Mock</h4>
                  <p class="smol-text text-black">A little side project for practice that I made about Netflix.</p>
                  <div class="text-black" id="proj-icons"><a href="https://flourishing-centaur-30f24d.netlify.app/"><button class="proj-btn"><i class="fa-solid fa-link"></i></button></a><a href="https://github.com/Mu-eed/Netflix-Mockery"><button class="proj-btn"><i class="fa-brands fa-github-alt" id="icon-ting"></i></button></a></div>
                </div>
              </div>

            </div>
          </div>
    </section>
</template>

<style>
    #projects {
      background-image: linear-gradient(
          40deg,
          rgb(6, 182, 235),
          #14c7e7,
          #d82aa4,
          #ff67f0
        );
        min-height: 100vh;
        overflow: hidden;
        padding-top: 100px;
        padding-bottom: 80px;
        /* padding-left: 10%; */
    }

    .proj-text {
      margin-top: 10px;
      font-weight: bolder;
    }

    .smol-text {
      /* font-size: smaller; */
    }

    .proj-btn {
      border-radius: 50%;
      background-color: transparent;
      border: none;
      height: 35px;
      width: 35px;
    }

    #proj-icons {
      display: flex;
      justify-content: center;
    }

    .proj-btn:hover {
      background-color: rgb(0, 0, 0);
      color: white;
      transition: 0.6s;
    }

    .title-heading {
        font-weight: bolder;
        font-size: 50px;
      }

    .section.gradient {
        overflow: hidden;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #f2f3f5;
        background-image: linear-gradient(rgb(0, 255, 234), rgb(255, 0, 221));
        backdrop-filter: blur(10px);
      }

      .section.gradient2 {
        overflow: hidden;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #f2f3f5;
        background-image: linear-gradient(rgb(0, 255, 234), rgb(255, 0, 221));
        backdrop-filter: blur(10px);
      }

      i.fa-solid.fa-link {
        font-size: 18px;
      }

      i.fa-brands.fa-github-alt {
        font-size: 18px;
      }

      #icon-ting {
        font-size: 1rem;
      }
</style>