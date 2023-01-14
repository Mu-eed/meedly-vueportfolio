<template>
    <section id="testimonials" style="margin-top: 75px; margin-bottom: 75px; margin-left: 30px;">
      <div class="container text-black">
        <div>
            <h1 class="testi-text text-center animate__animated animate__backInDown">Testimonials</h1>
        </div>
        <div class="container justify-content-center">
          <div class="row justify-content-center mx-2">
            <div class="col-md-4" v-for="proj in testimonial" :key="proj" :proj="proj">
              <div class="card shadow p-3 mb-5 bg-white rounded animate__animated animate__bounceIn" style="width: 18rem;">
                <img :src="proj.image" class="proj-img img-fluid">
                  <div class="card-body">
                      <h3>{{ proj.name }}</h3>
                    <p class="card-text">{{ proj.text }}</p>
                  </div>
                </div>
            </div>
            <!-- <div class="col-md-4">
              <div class="card aos-init aos-animate shadow p-3 mb-5 bg-white rounded" style="width: 18rem;" data-aos="flip-right">
                  <img src="https://i.postimg.cc/g25gXDzP/me.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3>Jake Jansen</h3>
                    <p class="card-text">Great guy to work with. Always willing to assist others where needed. Very good at working in teams and very communicative. Fast learner with great adaptability.</p>
                  </div>
                </div>
            </div> -->
            <!-- <div class="col-md-4">
              <div class="card aos-init aos-animate shadow p-3 mb-5 bg-white rounded" style="width: 18rem;" data-aos="zoom-in">
                  <img src="https://i.postimg.cc/t4VTyq7N/aneeqa.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3>Aneeqa Brown</h3>
                    <p class="card-text">Mu'eed is a highly thought intellectual from my perspective. He is not only hardworking but ambitious to recreate his vision exactly as thought of. He has great communication and leadership skills that a company needs especially his creativity.</p>
                  </div>
            </div>
          </div> -->
  <!-- <div class="col-md-4">
              <div class="card aos-init aos-animate shadow p-3 mb-5 bg-white rounded" style="width: 18rem;" data-aos="flip-up">
                  <img src="https://i.postimg.cc/mrJK44zC/56164181-2459897407354092-3884515211599675392-n.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3>Nikita Ramawoothar</h3>
                    <p class="card-text">Mu'eed is a very creative individual and is always pleasant company to have within the workplace. He is not only helpful but also an exceptional developer that you can always count on to get some ideas and inspiration from.</p>
                  </div>
            </div>
          </div> -->
  <!-- <div class="col-md-4">
              <div class="card aos-init aos-animate shadow p-3 mb-5 bg-white rounded" style="width: 18rem;" data-aos="flip-down">
                  <img src="https://i.postimg.cc/V6wBnZ22/IMG-20220904-134609-306.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3>Savannah Samuels</h3>
                    <p class="card-text">Mu'eed's a soft-hearted person who is always willing to help those in need and is always eager to learn new things and his not afraid of asking for help.</p>
                  </div>
                </div>
            </div> -->
  <!-- <div class="col-md-4">
              <div class="card aos-init aos-animate shadow p-3 mb-5 bg-white rounded" style="width: 18rem;" data-aos="flip-up">
                  <img src="https://i.postimg.cc/htFJXzk5/20220302-124527.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3>Abdul Wahhaab Abrahams</h3>
                    <p class="card-text">Mu'eed always know how to lighten the mood or make you smile. Mu'eed is an exceptional developer that has a great feel for it. He would be a great addition to any company.</p>
                  </div>
                </div>
            </div> -->
        </div>
        </div>
    </div>
    </section>
</template>

<script>
  export default {
    name: 'Testimonials',
    data(){
      return {
        testimonial:[
          {
            id: 1,
            name: "Abdul-Azeez Kemp",
            image: "https://i.postimg.cc/cHkTQBZW/Screenshot-20221101-100639-edit-159098746871600.jpg",
            text: "He is a great guy, always fun to be around. His communication and assistance is great, always available to assist and his coding skills are  good we can always ask him for assistance."
          },
          {
            id: 2,
            name: "Jake Jansen",
            image: "https://i.postimg.cc/g25gXDzP/me.jpg",
            text: "Great guy to work with. Always willing to assist others where needed. Very good at working in teams and very communicative. Fast learner with great adaptability."
          },
          {
            id: 3,
            name: "Aneeqa Brown",
            image: "https://i.postimg.cc/t4VTyq7N/aneeqa.jpg",
            text: "Mu'eed is a highly thought intellectual from my perspective. He is not only hardworking but ambitious to recreate his vision exactly as thought of. He has great communication and leadership skills that a company needs especially his creativity."
          },
          {
            id: 4,
            name: "Nikita Ramawoothar",
            image: "https://i.postimg.cc/mrJK44zC/56164181-2459897407354092-3884515211599675392-n.jpg",
            text: "Mu'eed is a very creative individual and is always pleasant company to have within the workplace. He is not only helpful but also an exceptional developer that you can always count on to get some ideas and inspiration from."
          },
          {
            id: 5,
            name: "Savannah Samuels",
            image: "https://i.postimg.cc/V6wBnZ22/IMG-20220904-134609-306.jpg",
            text: "Mu'eed's a soft-hearted person who is always willing to help those in need and is always eager to learn new things and his not afraid of asking for help."
          },
          {
            id: 6,
            name: "Abdul Wahhaab Abrahams",
            image: "https://i.postimg.cc/htFJXzk5/20220302-124527.jpg",
            text: "Mu'eed always know how to lighten the mood or make you smile. Mu'eed is an exceptional developer that has a great feel for it. He would be a great addition to any company."
          },
        ]
      }
    }
  }
</script>

<style>
    .testi-text{
        font-weight: 700;
        font-size: 50px;
        padding-right: 30px;
      }
</style>