<template>
  <section id="myHome">
  <div class="home">
    <!-- <video autoplay muted loop id="myVideo">
      <source src="../assets/InShot_20230110_121146999.mp4" type="video/mp4">
    </video> -->

    <div class="row">
      <div class="col-md-6">
    <div class="content">
      <h1 class="content-header animate__animated animate__fadeInLeft animate__slow">Hello, I'm </h1><h1 class="testi-text animate__animated animate__zoomIn animate__slow animate__delay-2s">Mu'eed Brown</h1>
      <h4 class="animate__animated animate__rollIn animate__delay-3s">Explore the realm of my portfolio...</h4>
      <router-link to="/About"><button id="myBtn" class="animate__animated animate__fadeIn animate__delay-5s">Take the journey</button></router-link>
    </div>
      </div>
      <div class="col-md-6">
        <div>
          <img class="content-img animate__animated animate__slideInUp animate__slow" src="https://i.postimg.cc/Wbs07bs3/IMG-20230111-WA0011.jpg" alt="">
        </div>
      </div>
  </div>
</div>
</section>
</template>

<style>
#myHome {
  background: linear-gradient(
          40deg,
          rgb(5, 190, 247),
          #14b2e7,
          #ef4dbf,
          #fe01e5
        );
        backdrop-filter: blur(10px);
        animation: gradient 6s ease infinite;
    background-position: center;
    background-size: 400% 400%;
    background-attachment: fixed;
    min-height: 100vh;
    overflow: hidden;
}

  /* #myHome {
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  } */

  .content {
    /* position: absolute; */
    margin-top: 40%;
    margin-left: 10%;
    font-weight: 500;
    /* bottom: 0; */
    /* background: rgba(0, 0, 0, 0.5); */
    color: #f1f1f1;
    /* width: 100%; */
    /* padding-right: 700px; */
  }

   #myBtn {
    display: inline-block;
    transition: all 0.5s;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    padding: 10px 24px;
    cursor: pointer;
    background: transparent;
    color: #f1f1f1;
    font-weight: bolder;
}

#myBtn:hover {
    /* background-image: linear-gradient(rgb(0, 255, 234), rgb(255, 0, 221)); */
    background-color: aliceblue;
    color: black;
    transition: 0.8s;
}

.content-img {
  width: 450px;
  /* height: 5px; */
  /* position: absolute; */
  padding-top: 150px;
  display: flex;
  justify-content: end;
}

@media screen and (max-width:600px) {
  .content-img::after {
    left: 37px;
  }
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

/* h1.testi-text.animate__animated.animate__zoomIn.animate__slower {
    --animate-delay: 4s;
} */
</style>

<script>
// @ is an alias to /src



</script>
