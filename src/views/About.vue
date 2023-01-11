<template>
  <section id="about" class="flex-height-fix container-fluid">
    <div class="container-lg">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
      <div class="about-wrapper">
        <h1 class="about-txt text-black">About Me</h1>
        <div class="row">
          <div class="col-md-3">
            <i class="fa-regular fa-user"></i>
          </div>
        </div>
      <div class="row">
        <div class="col-md-3">
          <div><img src="https://i.postimg.cc/vBYz0Xzj/my-image.jpg"  class="about-img"></div>
        </div>
        <div class="col-md-9">
          <p class="aboutMe-txt text-black">Hi there! I am a consistent fellow that will do whatever I
              can do to push more towards my goals.</p>
          <p class="aboutMe-txt text-black">I became very interested in gaming and computers at a very young
              age. I have been a gamer since I was about six years old, and I became
              interested in computers when I was at least 8. I am a nice and
              friendly guy; I can also be confident in working well
              with others.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </section>
</template>

<style>
.flex.height-fix {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}

#about {
  min-height: 100vh;
}

.about-wrapper {
        border-radius: 30px 30px 0px 0px;
        background-color: white;
        margin-top: 15%;
      }

.about-txt {
        font-weight: bolder;
}

h1.about-txt {
  font-size: 70px;
}

p.aboutMe-txt {
  font-size: 20px;
  /* margin-left: 95px; */
}

.about-img {
        width: 255px;
        border-radius: 25px;
        /* height: 500px; */
        /* margin-right: auto;
        margin-left: auto; */
}

.col-md-9 {
  margin-top: 5%;
}
</style>