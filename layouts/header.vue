<template>
  <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div>
          <a href="/"><img src="/img/logoutama.png" style="width: 80px; height: auto;" class="img-fluid"></a>
        </div>
        <nav id="navbar d-flex justify-content-center" class="navbar">
          <ul>
            <!-- <li><a class="nav-link scrollto active" href="#hero">Home</a></li> -->
            <li><a class="nav-link scrollto" href="/product">Produk</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle" ></i>
        </nav>
        <!-- <a href="https://wa.me/+6285959313394?text=Selamat%20Datang%20di%20Alpina-Official%20Store%2C%20ada%20yang%20saya%20bisa%20bantu%20..." class="btn btn-success mt-2 mb-2 mx-1 pb-1"><i class="bi bi-whatsapp"></i></a> -->
      </div>
    </header>
    <slot />
</template>