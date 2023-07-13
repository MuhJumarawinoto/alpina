<template>
<!-- ======= hero Section ======= -->
<section id="hero">
  <div class="hero-container">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

      <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active" style="background-image: url(/img/hero-carousel/1.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown"></h2>
              <img class=" scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
              <!-- <p class="animate__animated animate__fadeInUp" style="font-family:'Jacques Francois', serif;">ALPINA</p> -->
              <!-- <a href="https://wa.me/+6285959313394?text=Selamat%20Datang%20di%20Alpina-Official%20Store%2C%20ada%20yang%20saya%20bisa%20bantu%20..." class="btn-get-started scrollto animate__animated animate__fadeInUp" style="background:#2ddd22 ;"><i class="bi bi-whatsapp"></i> Pesan Disini</a> -->
            </div>
          </div>
        </div>

        <div class="carousel-item active" style="background-image: url(/img/hero-carousel/2.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown"></h2>
              <img class="scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
              <!-- <p class="animate__animated animate__fadeInUp" style="font-family:'Jacques Francois', serif;">ALPINA</p> -->
              <!-- <a href="https://wa.me/+6285959313394?text=Selamat%20Datang%20di%20Alpina-Official%20Store%2C%20ada%20yang%20saya%20bisa%20bantu%20..." class="btn-get-started scrollto animate__animated animate__fadeInUp" style="background:#2ddd22 ;"><i class="bi bi-whatsapp"></i> Pesan Disini</a> -->
            </div>
          </div>
        </div>

        <div class="carousel-item active" style="background-image: url(/img/hero-carousel/3.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown"></h2>
              <img class=" scrollto animate__animated animate__fadeInUp"  src="/img/logoutama.png" style="width: 400px;" alt="">
              <!-- <p class="animate__animated animate__fadeInUp" style="font-family:'Jacques Francois', serif;">ALPINA</p> -->
              <!-- <a href="https://wa.me/+6285959313394?text=Selamat%20Datang%20di%20Alpina-Official%20Store%2C%20ada%20yang%20saya%20bisa%20bantu%20..." class="btn-get-started scrollto animate__animated animate__fadeInUp" style="background:#2ddd22 ;"><i class="bi bi-whatsapp"></i> Pesan Disini</a> -->
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
</section><!-- End Hero Section -->
 
    <slot />
        
    
</template>