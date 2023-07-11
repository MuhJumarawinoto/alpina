<template>
    <section id="hero">
        <div class="hero-container">
          <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
    
            <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>
    
            <div class="carousel-inner" role="listbox">
    
              <div class="carousel-item active" style="background-image: url(img/hero-carousel/1.jpg)">
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown" style="font-family: 'Jacques Francois', serif;">ALPINA</h2>
                    <p class="animate__animated animate__fadeInUp"></p>
                    <!-- <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> -->
                  </div>
                </div>
              </div>

            </div>
<!--     
            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>
    
            <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a> -->
    
          </div>
        </div>
      </section>
        
    <slot />
</template>