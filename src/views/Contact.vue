<template>
    <section id="contact" class="flex-height-fix py-5">
      <div>
        <h1 class="testi-text text-center">Contact Me</h1>
    </div>
        <div class="container my-5">
          <div class="card w-75 mx-auto p-5 shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
          <form action="https://formspree.io/f/mqkjgakp" method="POST">
            <div class="row">
              <div class="col text-black">
                Name<input name="name" type="text" class="form-control">
              </div>
              <div class="col text-black">
                Surname<input name="lastname" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group text-black">
              <label for="exampleInputEmail1">Email address</label>
              <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group text-black">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-light">Submit</button>
          </form>
        </div>
        </div>
        </div>
    </section>
</template>

<style>
    #contact {
      background: linear-gradient(
          40deg,
          rgb(5, 190, 247),
          #14b2e7,
          #ef4dbf,
          #fe01e5
        );
        backdrop-filter: blur(10px);
        animation: gradient 6s ease infinite;
      min-height: 100vh;
      background-size: 400% 400%;
        margin-top: 50px;
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