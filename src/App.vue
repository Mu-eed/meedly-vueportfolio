<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: rgb(255, 255, 255);
}

body {
  background-color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
}



a.navbar-brand.logo.text-center {
  font-family: 'Sofia Sans', sans-serif;
  font-weight: 600;
  margin-right: 87px;
  font-size: 37px;
}

nav {
  padding: 30px;
}

.nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    color: white;
}

.flex.height-fix {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.logo {
    color: white;
    font-size: 30px;
    font-weight: 2000;
    text-decoration: none;
}

.social-icon {
  height: 32px;
  width: 32px;
  padding-top: 15px;
  color: black;
  list-style-type: none;
}
</style>

<style> @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); </style>

<style> @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap'); </style>