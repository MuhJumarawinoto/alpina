<template>
  <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active" style="background-image: url(/img/hero-carousel/1.jpg)">
            <div class="carousel-container">
              <div class="container d-flex justify-content-center">
                <img class=" scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
                <!-- <h2 class="animate__animated animate__fadeInDown">The Best Business Information </h2>
                <p class="animate__animated animate__fadeInUp">We're In The Business Of Helping You Start Your Business</p> -->
                <!-- <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> -->
              </div>
            </div>
          </div>

          <div class="carousel-item" style="background-image: url(/img/hero-carousel/2.jpg)">
            <div class="carousel-container">
              <div class="container d-flex justify-content-center">
                <img class=" scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
                <!-- <h2 class="animate__animated animate__fadeInDown">At vero eos et accusamus</h2>
                <p class="animate__animated animate__fadeInUp">Helping Business Security & Peace of Mind for Your Family</p>
                <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> -->
                
              </div>
            </div>
          </div>

          <div class="carousel-item" style="background-image: url(/img/hero-carousel/3.jpg)">
            <div class="carousel-container">
              <div class="container d-flex justify-content-center">
                <img class=" scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
                <!-- <h2 class="animate__animated animate__fadeInDown">Temporibus autem quibusdam</h2>
                <p class="animate__animated animate__fadeInUp">Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> -->
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>
  <slot />

</template>