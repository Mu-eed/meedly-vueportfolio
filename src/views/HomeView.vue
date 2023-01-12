<template>
  <section id="myHome">
  <div class="home">
    <!-- <video autoplay muted loop id="myVideo">
      <source src="../assets/InShot_20230110_121146999.mp4" type="video/mp4">
    </video> -->

    <div class="row">
      <div class="col-md-6">
    <div class="content">
      <h1 class="content-header">Hello, I'm <span class="testi-text">Mu'eed Brown</span></h1>
      <h4>Explore the realm of my portfolio...</h4>
      <router-link to="/About"><button id="myBtn">Take the journey</button></router-link>
    </div>
      </div>
      <div class="col-md-6">
        <div>
          <img class="content-img" src="https://i.postimg.cc/Wbs07bs3/IMG-20230111-WA0011.jpg" alt="">
        </div>
      </div>
  </div>
</div>
</section>
</template>

<style>
#myHome {
  background-image: linear-gradient(
          40deg,
          rgb(6, 182, 235),
          #14c7e7,
          #d82aa4,
          #ff67f0
        );
        backdrop-filter: blur(10px);
        animation: gradient 15s ease infinite;
    background-position: center;
    background-size: cover;
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
</style>

<script>
// @ is an alias to /src



</script>
