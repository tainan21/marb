<template>
  <div>
    <div class="topbar" style="background: white;  height: 50px; width: 100%; position: fixed; z-index: 999999">
      <div class="container" style="height: 100%;">
        <div class="row" style="height: 100%;">
          <div class="col-6" style="display: flex; align-items: center; justify-content: flex-start;">
              <img src="@/assets/logoblack.png" class="" alt="" style="width: 55px;">
          </div>
          <div class="col-6" style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end">
            <a href="https://www.instagram.com/shopmarbbr/?hl=pt" style="color: black; font-size: 14px; font-weight: bold;"><i class='bx bx-heart' style="left: 1px; bottom: 5px;left: -3px;bottom: -1.8px;position: relative;"></i>instagram</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner section start -->
    <section class="banner bannerfundao" style="position: relative;">
      <div class="exclude" >
        <img src="@/assets/dream_colageno.png" class="img-absolute-1" alt="Responsive image"> 
        <img src="@/assets/Kitcom3-MacaBoro.png" class="img-absolute-2" alt="Responsive image"> 
        <img src="@/assets/garantia-1.png" class="img-absolute-3" alt="Responsive image">
      </div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-0">
            <div class="banner-content">
              <span class="title-banner">Shop Marb</span>
              <span class="banner-font">O autocuidado é extremamente importante para ter uma vida leve, saudável e feliz. Se cuidar nunca será um gasto, mas sim, um investimento. E existe investimento melhor do que cuidar de nós mesmos?</span>
            </div>
          </div>
          <div class="col-md-6  order-0 order-md-1">
            <div class="ban-img">
              <img src="@/assets/taisebn1.png" class="img-fluid taiseimage" alt="Responsive image" style="width: 60%;">
            </div>
          </div>
        </div>        
      </div>
    </section>
    <!-- Banner section end -->
    <!-- Lorem ipson start -->
    <section class="feat-product">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="sec-heading">
              <h3 class="sec-title">Confira Ja!</h3>
            </div>
          </div>
        </div>
        <div class="row" style="margin-bottom: 15px;">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <vs-card>
              <template #title><h3 href="#" class="titleProduct">Maca Negra</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/APC20570150">
                  <img src="@/assets/Kitcom3-MacaBoro.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p href="" class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <vs-card >
              <template #title><h3 class="titleProduct">Happy Hair</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/AKV20329213">
                  <img src="@/assets/happyAirGroup.jpeg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <vs-card >
              <template #title><h3 href="#" class="titleProduct">Lift Detox</h3></template>
              <template #img>
                <a href="http://mon.net.br/22e9dh">
                  <img src="@/assets/lifeDetox.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
        </div>
      </div>
    </section>
    <!-- Banner 02 section start -->
    <section class="banner02">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="banner-content">
              <a href="http://mon.net.br/22e9dh" class="btn-default">Leve Agora!</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="ban-img">
              <img src="@/assets/taisebn1.png"  alt="" class="taiseimage"> 
            </div>
          </div>
        </div>        
      </div>
    </section> 
    <!-- Banner 02 section end -->
    <!-- Popular products end -->
    <!--Trending Products start -->
    <section class="trending-products">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="sec-heading">
              <h3 class="sec-title">Trending products</h3>
            </div>
          </div>
        </div>          
        <div class="row" style="margin-bottom: 15px;">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card>
              <template #title><h3 href="#" class="titleProduct">Happy Hair</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/AKV20329213">
                  <img src="@/assets/happyOne.jpeg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p href="" class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 class="titleProduct">Happy Hair</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/AKV20329213">
                  <img src="@/assets/happyAirtriplo.jpeg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 href="#" class="titleProduct">Maca Negra</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/APC20570150">
                  <img src="@/assets/MacaBoro1Pote-1000x1000.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 href="#" class="titleProduct">Maca Negra</h3></template>
              <template #img>
                <a href="https://app.monetizze.com.br/r/APC20570150">
                  <img src="@/assets/Kitcom5-MacaBoro.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
        </div>
        <div class="row" style="margin-bottom: 15px;">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 class="titleProduct">Dream Colageno</h3></template>
              <template #img>
                <a href="http://mon.net.br/22a03s">
                  <img src="@/assets/dream_colageno.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 href="#" class="titleProduct">Dream Lipo</h3></template>
              <template #img>
                <a href="http://mon.net.br/22a03s">
                  <img src="@/assets/DreamLipo2.jpg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card>
              <template #title><h3 href="#" class="titleProduct">Dream Lipo</h3></template>
              <template #img>
                <a href="http://mon.net.br/22e7b4">
                  <img src="@/assets/DreamLipo3.jpg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p href="" class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <vs-card >
              <template #title><h3 href="#" class="titleProduct">Lift Detox</h3></template>
              <template #img>
                <a href="http://mon.net.br/22e9dh">
                  <img src="@/assets/lifeDetox.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
        </div>
      </div>
    </section>
    <!-- Instagram Seguis -->
    <section class="banner bannerfundao">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
              <h1 class="title-banner" style="font-size: 3rem !important; margin-top: 10px !important;">Veja quem usa o produto:</h1>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="wrapper">
              <div class="left-col">
                  <div class="post">
                      <div class="info">
                          <div class="user">
                            <vs-avatar history history-gradient circle>
                              <img src="@/assets/virteste.png" alt="">
                            </vs-avatar>
                              <p class="username">Virginia</p>
                          </div>
                          <img src="img/option.PNG" class="options" alt="">
                      </div>
                      <a href="https://www.instagram.com/shopmarbbr/?hl=pt">  
                        <img src="@/assets/virteste.png" class="img-fluid productimage" style="padding-top: 0px !important; height: 290px !important;" alt="Responsive image">
                      </a>
                      <div class="post-content">
                          <div class="reaction-wrapper">
                            <i class='bx bx-heart icon'></i>
                            <i class='bx bx-user icon'></i>
                            <i class='bx bx-user icon'></i>
                          </div>
                          <p class="likes" style="text-align: start; padding: 0 !important;">14,012 likes</p>
                          <p class="post-time" style="text-align: start">2 minutes ago</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="wrapper">
              <div class="left-col">
                  <div class="post">
                      <div class="info">
                          <div class="user">
                            <vs-avatar history history-gradient circle>
                              <img src="@/assets/taise-marb.jpeg" alt="">
                            </vs-avatar>
                              <p class="username">Taise</p>
                          </div>
                          <img src="img/option.PNG" class="options" alt="">
                      </div>
                      <a href="https://www.instagram.com/shopmarbbr/?hl=pt">
                        <img src="@/assets/taise-marb.jpeg" class="img-fluid productimage" style="padding-top: 0px !important; height: 290px !important;" alt="Responsive image">
                      </a>
                      <div class="post-content">
                          <div class="reaction-wrapper">
                            <i class='bx bx-heart icon'></i>
                            <i class='bx bx-user icon'></i>
                            <i class='bx bx-user icon'></i>
                          </div>
                          <p class="likes" style="text-align: start; padding: 0 !important;">12,012 likes</p>
                          <p class="post-time" style="text-align: start">4 minutes ago</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Instagram start -->
    <section class="">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="sec-heading">
              <h3 class="sec-title">follow us</h3>
            </div>
          </div>
        </div> 
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <vs-card type="1">
              <template #title>
                <h3 href="#" class="titleProduct">Shop Marb</h3></template>
              <template #img>
                <a href="https://www.instagram.com/shopmarbbr/?hl=pt">
                  <img src="@/assets/taisebn1.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-md-4 col-sm-6">
            <vs-card type="1">
              <template #title>
                <h3 href="#" class="titleProduct">Shop Marb</h3></template>
              <template #img>
                <a href="https://www.instagram.com/shopmarbbr/?hl=pt">
                  <img src="@/assets/DreamInsta.jpeg" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
          <div class="col-md-4 col-sm-6">
            <vs-card type="1">
              <template #title>
                <h3 href="#" class="titleProduct">Shop Marb</h3></template>
              <template #img>
                <a href="https://www.instagram.com/shopmarbbr/?hl=pt">
                  <img src="@/assets/virteste.png" class="img-fluid productimage" alt="Responsive image">
                </a>
              </template>
              <template #text><p class="describleText">Cuide de sua Saúde</p></template>
              <template #interactions>
                <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
              </template>
            </vs-card>
          </div>
        </div>
      </div>
    </section>
    <!-- Instagram end -->
    <footer>
      <div class="container">
        <p class="copyright">Copyright © 2022 <a href="#">ShopMarb</a>. All rights reserved.</p>
      </div>
    </footer>
    <!-- Footer end -->
  </div>
</template>

<script>
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
  </script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Dancing+Script:400,700&display=swap");
  
  .bannerfundao{
    background-image: url('@/assets/bg-1.png');
    //background-image: url('@/assets/banner1.png');
  }
  .vs-card-content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vs-card__img{
    height: 220px !important;
    max-height: 220px !important;
  }
  .productimage{
    width: 100%;   
    padding-top: 40px;
    display: initial;
    height: 220px;
  }
  .banner-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .banner02{
    min-height: 400px;
    /* defina o background como fixo e posicione a imagem */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;  
    background-size: cover; 
    display: flex; 
    align-items: center;
  }
  .taiseimage{
    width: 50%;   
    padding-top: 40px;
    display: initial;
  }
  .product-item{
    height: 310px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;  
    background-size: cover;
  }
  .product-thumb{
    display: flex !important;
    width: 100%;
    height: 100%;
    margin-bottom: 0 !important;
  }
  .img_product{
    width: 100%;
    max-width: 300px;
    height: 270px !important;
  }
  .productresponsive{
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>  