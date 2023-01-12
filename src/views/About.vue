<template>
  <section id="about" class="flex-height-fix py-5 container-fluid">
    <div class="container">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
      <div class="about-wrapper">
        
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
          <h1 class="about-txt text-black">About Me</h1>
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
    <div>
        <h1 class="testi-text text-center">Resume & Education</h1>
      </div>
    <div class="timeline">
      <div class="container-time left mt-4 mb-4">
        <div class="resume-content">
          <h2 class="head">2022 - Present</h2>
          <p>In 2022, I started at the Life Choices Coding Course. I am busy learning the basics of coding, including HTML, CSS, Bootstrap, JavaScript, MySQL, etc.</p>
        </div>
      </div>
      <div class="container-time right">
        <div class="resume-content">
          <h2 class="head">2017 - 2021</h2>
          <p>In 2017, I went to Vista Nova High School, and I matriculated from VNHS in 2021.</p>
        </div>
      </div>
      <div class="container-time left mt-4">
        <div class="resume-content">
          <h2 class="head">2010 - 2016</h2>
          <p>Between 2010 and 2016, I went to Vista Nova Primary School which is a private school.</p>
        </div>
      </div>
      <div class="container-time right">
        <div class="resume-content">
          <h2 class="head">Other ventures</h2>
          <p>In 2019, I volunteered at the SPCA. In the same year, I learnt about the Delphi Coding Language in Information Technology.</p>
        </div>
      </div>
    </div>
    </section>

    <section id="about-skills" class="flex-height-fix py-5">
      <h1 class="testi-text text-center text-black">Skills</h1>
      <div class="container-fluid p-3 m-3">
        <div class="row">
          <div class="col-md-3 text-black">
            <div id="skills-card"><i class="fa-brands fa-html5"></i></div>
          </div>
        </div>
      </div>
    </section>
</template>

<style>
/* .flex.height-fix {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
} */

#about {
  min-height: 100vh;
  background-image: linear-gradient(
          40deg,
          rgb(6, 182, 235),
          #14c7e7,
          #d82aa4,
          #ff67f0
        );
}

#about-skills {
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

.head {
        font-weight: bolder;
      }

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container-time {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

@media screen and (max-width:600px) {
  .timeline::after {
    left: 31px;
  }
}

.left::after, .right::after {
  left: 15px;
}
</style>