<template>
  <div id="slider">
    <div class=" mt-5 justify-content-center align-items-center pl-3 pr-3">
      <div id="owl1" class="owl-carousel owl-theme">

         <!-- item 1 -->
        <div class="item d-flex justify-content-center align-items-center">
          <a href="#" target="_blank">

            <div class="owl-card mb-3">
              <div class="row no-gutters">

                <div class="col-4 d-none d-lg-block">
                  <img src="../../assets/img/slider/shipping.png" class="p-4" alt="..." />
                  <img src="../../assets/img/slider/shippingLight.png" class="p-4" alt="..." />
                </div>

                <div class="col-12 col-lg-8 pl-2 pl-lg-0">
                  <h6 class="">Free shipping</h6>
                  <p class="">For a local customer, we provide free shipping facility</p>
                </div>

              </div>
            </div>

          </a>
        </div>


         <!-- item 2 -->
        <div class="item d-flex justify-content-center align-items-center">
          <a href="#" target="_blank">

            <div class="owl-card mb-3">
              <div class="row no-gutters">

                <div class="col-4 d-none d-lg-block">
                  <img src="../../assets/img/slider/shipping.png" class="p-4" alt="..." />
                  <img src="../../assets/img/slider/shippingLight.png" class="p-4" alt="..." />
                </div>

                <div class="col-12 col-lg-8 pl-2 pl-lg-0">
                  <h6 class="">Free shipping</h6>
                  <p class="">For a local customer, we provide free shipping facility</p>
                </div>

              </div>
            </div>

          </a>
        </div>


         <!-- item 3 -->
        <div class="item d-flex justify-content-center align-items-center">
          <a href="#" target="_blank">

            <div  class="owl-card mb-3">
              <div class="row no-gutters">

                <div class="col-4 d-none d-lg-block">
                  <img src="../../assets/img/slider/shipping.png" class="p-4" alt="..." />
                  <img src="../../assets/img/slider/shippingLight.png" class="p-4" alt="..." />
                </div>

                <div class="col-12 col-lg-8 pl-2 pl-lg-0">
                  <h6 class="">Free shipping</h6>
                  <p class="">For a local customer, we provide free shipping facility</p>
                </div>

              </div>
            </div>

          </a>
        </div>


         <!-- item 4 -->
        <div class="item d-flex justify-content-center align-items-center">
          <a href="#" target="_blank">

            <div class="owl-card mb-3">
              <div class="row no-gutters">
                <div class="col-4 d-none d-lg-block">
                  <img src="../../assets/img/slider/shipping.png" class="p-4" alt="..." />
                  <img src="../../assets/img/slider/shippingLight.png" class="p-4" alt="..." />
                </div>

                <div class="col-12 col-lg-8 pl-2 pl-lg-0">
                  <h6 class="">Free shipping</h6>
                  <p class="">For a local customer, we provide free shipping facility</p>
                </div>

              </div>
            </div>

          </a>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Slider",
};
</script>

<script scoped>

$(document).ready(function () {
  
  var owl = $("#owl1");
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
            1600: {
        items: 5,
      },
    },
  });
});
</script>



<style>


#slider .item {
  height: 100px;

}

#slider .owl-card {
  background-color: #20d3c144;
  margin-top: 1rem;
  border-radius: 8px;
 
}

#slider .textarea {
padding: 10px;

}

#slider a:link h6,
#slider a:visited  h6   {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
color:  #20d3c2;
}

#slider  a:active h6,
#slider a:hover  h6   {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
color: var(--white-color);
}

#slider .owl-card p {
  font-size: 0.7em;
  line-height: 1.1rem;
  margin-top: -20px;
}


#slider a:link,
#slider a:visited {
  text-decoration: none;
  color: var(--dark-color);
}

#slider a:active .owl-card,
#slider a:hover .owl-card {
  text-decoration: none;
  color: var(--dark-color);
}

#slider a:hover .owl-card {
  background-color: #20d3c2;
  color: var(--white-color);
}

#slider  a:link img:last-child {
  display: none;
}
#slider a:hover img:last-child {
  display: block;
}
#slider a:hover img:first-child {
  display: none;
}


</style>