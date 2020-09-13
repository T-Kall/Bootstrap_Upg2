<template>
  <div class="mt-5 container text-center">
    <h1 class="text-center">
      New
      <span>arrivals</span>
    </h1>
    <hr class="zigzag" />
    <p class="mb-5">Check out our latest products from top fashion designers</p>

    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>
   
      <div class="container mt-5">

        <!-- <div  id="owl2" class="owl-carousel owl-theme"> -->

          <!-- item 1 -->
          <div class="arrivals">
            <img src="../../assets/img/kille2.png" alt="Avatar" class="image" style="width:100%" />
            <div class="new pt-3">New</div>

            <figcaption class="figure-caption">
              <div class="caption-text">Blue silk flare sleeved top</div>
            </figcaption>

            <div class="overlay">
              <div class="description">
                <div class="pb-2">New look men's coat</div>
                <span class="category border p-2">Fashion</span>
                <div class="pt-2">
                  <s>$220.00</s>
                </div>
                <div class="price">$190.00</div>
              </div>
              <div class="choose">
                <a href="#">
                  <i class="fas fa-circle d-flex mt-2 mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="far fa-heart d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-random d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#" class="tooltipChange" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                   <i class="fas fa-shopping-cart d-flex mb-2 justify-content-center"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- end item 1 -->

          <!-- item 2 -->
          <!-- <div class="arrivals">
            <img src="../../assets/img/kille2.png" alt="Avatar" class="image" style="width:100%" />
            <div class="new pt-3">New</div>

            <figcaption class="figure-caption">
              <div class="caption-text">Blue silk flare sleeved top</div>
            </figcaption>

            <div class="overlay">
              <div class="description">
                <div class="pb-2">New look men's coat</div>
                <span class="category border p-2">Fashion</span>
                <div class="pt-2">
                  <s>$220.00</s>
                </div>
                <div class="price">$190.00</div>
              </div>
              <div class="choose">
                <a href="#">
                  <i class="fas fa-circle d-flex mt-2 mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="far fa-heart d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-random d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search d-flex mb-2 justify-content-center"></i>
                </a>
                <a
                  href="#"
                  class="tooltipChange"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Tooltip on left"
                >
                  <i class="fas fa-shopping-cart d-flexmb-2 justify-content-center"></i>
                </a>
              </div>
            </div>
          </div> -->
          <!-- end item 2 -->

          <!-- item 3 -->
          <!-- <div class="arrivals">
            <img src="../../assets/img/kille2.png" alt="Avatar" class="image" style="width:100%" />
            <div class="new pt-3">New</div>

            <figcaption class="figure-caption">
              <div class="caption-text">Blue silk flare sleeved top</div>
            </figcaption>

            <div class="overlay">
              <div class="description">
                <div class="pb-2">New look men's coat</div>
                <span class="category border p-2">Fashion</span>
                <div class="pt-2">
                  <s>$220.00</s>
                </div>
                <div class="price">$190.00</div>
              </div>
              <div class="choose">
                <a href="#">
                  <i class="fas fa-circle d-flex mt-2 mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="far fa-heart d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-random d-flex mb-2 justify-content-center"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search d-flex mb-2 justify-content-center"></i>
                </a>
                <a
                  href="#"
                  class="tooltipChange"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Tooltip on left"
                >
                  <i class="fas fa-shopping-cart d-flexmb-2 justify-content-center"></i>
                </a>
              </div>
            </div>
          </div> -->
          <!-- end item 3 -->
        </div>
      <!-- </div> -->
  
  </div>
</template>


<script scoped>
export default {
  name: "NewArrivals",
};
</script>


<script>
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>

<script scoped>

// $(document).ready(function () {
//   var owl = $("#owl2");
//   owl.owlCarousel({
//     items: 4,
//     loop: true,
//     margin: 20,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     nav: true,
//     dots: true,
//     responsiveClass: true,

//     responsive: {
//       0: {
//         items: 1,
//       },
//       300: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1200: {
//         items: 3,
//       },
//     },
//   });
// });

</script>


<style  >

.arrivals {
  position: relative;
  max-width: 500px;
  border-radius: 8px;
  background: var(--bgproduct-color);
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.new {
  position: absolute;
  top: 0;
  background: var(--theme-color);
  width: 4rem;
  height: 4rem;
  margin: 5%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
}

.figure-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--dark-color);
  border-radius: 0 8px;
  width: 100%;
  color: var(--theme-color);
  border-radius: 0 0 8px 8px;
  opacity: 1;
}

.caption-text {
  color: var(--white-color);
  padding: 0.5rem 1rem;
  text-align: left;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: #0e153d;
  background: #0e153dcc;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;
  border-radius: 8px;
}

/* beskrivningen */
.overlay .description {
  position: absolute;
  bottom: 1rem;
  left: 0;

  color: white;
  font-size: 20px;
  padding: 1rem;
  text-align: left;
  font-size: 100%; 
}

.choose {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--white-color);
  color: var(--grey-color);
  font-size: 100%;
  padding: 0.7rem;
  margin: 1rem;
  text-align: center;
  border-radius: 25px;
}

.choose a:link,
.choose a:visited {
  color: var(--grey-color);
  text-decoration: none;
}

.choose a:hover,
.choose a:active {
  color: var(--theme-color);
  text-decoration: none;
}

.arrivals:hover .figure-caption {
  opacity: 0;
}

.arrivals:hover .overlay {
  opacity: 1;
}

/*Tooltip*/ 
.tooltip > .tooltip-inner {
  background-color: var(--theme-color);
}

.tooltip.bs-tooltip-auto[x-placement^="left"] .arrow::before,
.tooltip.bs-tooltip-left .arrow::before {
  border-left-color: var(--theme-color);
}


.category {
  font-size: 0.8em;
}

.price {
  font-size: 1.2em;
  font-weight: 700;
  line-height: 2rem;
  color: var(--theme-color);
}
</style>