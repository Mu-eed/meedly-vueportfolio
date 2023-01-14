<template>
  <section id="about" class="flex-height-fix py-5 container-fluid">
    <div class="container animate__animated animate__slideInDown">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
      <div class="about-wrapper">
        
      <div class="row">
        <div class="col-md-3">
          <div><img src="https://i.postimg.cc/vBYz0Xzj/my-image.jpg"  class="about-img animate__animated animate__zoomIn animate__slow animate__delay-3s"></div>
        </div>
        <div class="col-md-9">
          <h1 class="about-txt text-black animate__animated animate__fadeInRight animate__delay-1s">About Me</h1>
          <p class="aboutMe-txt text-black animate__animated animate__fadeInLeft animate__delay-2s">Hi there! I am a consistent fellow that will do whatever I
              can do to push more towards my goals.</p>
          <p class="aboutMe-txt text-black animate__animated animate__fadeInLeft animate__delay-2s">I became very interested in gaming and computers at a very young
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
      <div class="container-time left mt-4 mb-4" v-for="items in resume" :key="items" :items="items">
        <div class="resume-content animate__animated animate__fadeInRight animate__delay-5s">
          <h2 class="head">{{ items.year }}</h2>
          <p>{{ items.text }}</p>
        </div>
      </div>
      <div class="container-time right" v-for="items in resume2" :key="items" :items="items">
        <div class="resume-content animate__animated animate__fadeInLeft animate__delay-5s">
          <h2 class="head">{{ items.year }}</h2>
          <p>{{ items.text }}</p>
        </div>
      </div>
      <div class="container-time left mt-4" v-for="items in resume3" :key="items" :items="items">
        <div class="resume-content animate__animated animate__fadeInRight animate__delay-5s">
          <h2 class="head">{{ items.year }}</h2>
          <p>{{ items.text }}</p>
        </div>
      </div>
      <div class="container-time right" v-for="items in resume4" :key="items" :items="items">
        <div class="resume-content animate__animated animate__fadeInLeft animate__delay-5s">
          <h2 class="head">{{ items.year }}</h2>
          <p>{{ items.text }}</p>
        </div>
      </div>
    </div>
    

    <!-- <section id="about-skills" class="flex-height-fix py-5"> -->
      <div class="container">
        <div class="card shadow p-3 mb-5 bg-white rounded" id="about-skills">
      <h1 class="testi-text text-center text-black">Skills</h1>
      <div class="container-fluid p-3 m-3">
        <div class="row">
          <div class="col-md-3 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-7s">
              <i class="fa-brands fa-html5" id="html-icon"></i>
            </div>
          </div>
          <div class="col-md-3 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-8s">
              <i class="fa-brands fa-css3-alt" id="css-icon"></i>
            </div>
          </div>
          <div class="col-md-3 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-9s">
              <i class="fa-brands fa-square-js" id="js-icon"></i>
            </div>
          </div>
          <div class="col-md-3 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-10s">
              <i class="fa-brands fa-vuejs" id="vue-icon"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-11s">
              <i class="fa-brands fa-bootstrap" id="bootstrap-icon"></i>
            </div>
          </div>
          <div class="col-md-6 text-black">
            <div id="skills-card" class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__zoomIn animate__delay-12s">
              <i class="fa-brands fa-github" id="github-icon"></i>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </section> -->
  </section>
</template>

<script>
  export default {
    name: 'Resume',
    data(){
      return{
        resume:[
          {
            id: 1,
            year: "2022 - Present",
            text: "In 2022, I started at the Life Choices Coding Course. I am busy learning the basics of coding, including HTML, CSS, Bootstrap, JavaScript, MySQL, etc."
          }, 
        ],
        resume2:[
          {
            id: 2,
            year: "2017 - 2021",
            text: "In 2017, I went to Vista Nova High School, and I matriculated from VNHS in 2021."
          }, 
        ],
        resume3:[
          {
            id: 3,
            year: "2010 - 2016",
            text: "Between 2010 and 2016, I went to Vista Nova Primary School which is a private school."
          },
        ],
        resume4:[
          {
            id: 4,
            year: "Other ventures",
            text: "In 2019, I volunteered at the SPCA. In the same year, I learnt about the Delphi Coding Language in Information Technology"
          },
        ],
      }
    }
  }
</script>

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
  background: linear-gradient(
          40deg,
          rgb(5, 190, 247),
          #14b2e7,
          #ef4dbf,
          #fe01e5
        );
        backdrop-filter: blur(10px);
        animation: gradient 6s ease infinite;
        background-size: 400% 400%;
}

#about-skills {
  padding-right: 7px;
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
        width: 310px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
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

/* @media screen and (max-width:600px) {
  .timeline::after {
    left: 31px;
  }
} */

.left::after, .right::after {
  left: 15px;
}

#html-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

#css-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

#js-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

#vue-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

#bootstrap-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

#github-icon {
  padding: 5rem;
  color: black;
  font-size: 4rem;
  text-align: center;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>