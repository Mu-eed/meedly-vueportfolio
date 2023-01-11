<template>
  <section id="myHome">
  <div class="home">
    <!-- <video autoplay muted loop id="myVideo">
      <source src="../assets/InShot_20230110_121146999.mp4" type="video/mp4">
    </video> -->

    <div class="content">
      <h1 class="content-header">Hello, I'm <span>Mu'eed Brown</span></h1>
      <h4>Explore the realm of my portfolio...</h4>
      <router-link to="/About"><button id="myBtn">Take the journey</button></router-link>
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
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

  /* #myHome {
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  } */

  .content {
    position: absolute;
    margin-top: 40%;
    margin-right: 20%;
    font-weight: 500;
    /* bottom: 0; */
    /* background: rgba(0, 0, 0, 0.5); */
    color: #f1f1f1;
    width: 100%;
    /* padding-right: 700px; */
  }

   #myBtn {
    display: inline-block;
    transition: all 0.5s;
    text-decoration: none;
    border: 2px solid aliceblue;
    border-radius: 6px;
    padding: 10px 24px;
    cursor: pointer;
    background: transparent;
    color: #f1f1f1;
}

#myBtn:hover {
    background-image: linear-gradient(rgb(0, 255, 234), rgb(255, 0, 221));
    color: white;
}
</style>

<script>
// @ is an alias to /src



</script>
