<template>
  <div id="slider" class="container">
      
       <!-- slide  -->
      <div class="item">     
      <a href="#" target="_blank">
        <div class="card mb-3" style>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../../assets/img/slider/shipping.png" class="card-img p-4" alt="..." />
              <img src="../../assets/img/slider/shippingLight.png" class="card-img p-4" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Free shipping</h5>
                <p class="card-text">For a local customer, we provide free shipping facility</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </div>

       <!-- slide  -->
      <div class="item">     
      <a href="#" target="_blank">
        <div class="card mb-3" style>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../../assets/img/slider/shipping.png" class="card-img p-4" alt="..." />
              <img src="../../assets/img/slider/shippingLight.png" class="card-img p-4" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Free shipping</h5>
                <p class="card-text">For a local customer, we provide free shipping facility</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </div>

 <!-- slide  -->
      <div class="item">     
      <a href="#" target="_blank">
        <div class="card mb-3" style>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../../assets/img/slider/shipping.png" class="card-img p-4" alt="..." />
              <img src="../../assets/img/slider/shippingLight.png" class="card-img p-4" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Free shipping</h5>
                <p class="card-text">For a local customer, we provide free shipping facility</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </div>

 <!-- slide  -->
      <div class="item">     
      <a href="#" target="_blank">
        <div class="card mb-3" style>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../../assets/img/slider/shipping.png" class="card-img p-4" alt="..." />
              <img src="../../assets/img/slider/shippingLight.png" class="card-img p-4" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Free shipping</h5>
                <p class="card-text">For a local customer, we provide free shipping facility</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </div>




  </div>
</template>


<script>
export default {
  name: "Slider",
};


</script>





<style>


#slider .card {
  max-width: 540px;
  background-color: #20d3c144;
}

#slider a:link,
#slider a:visited {
  text-decoration: none;
  color: var(--dark-color);
}

#slider a:active .card,
#slider a:hover .card {
  text-decoration: none;
  color: var(--dark-color);
  /*  background-color: red; */
  /* filter: brightness(0.5) invert(1); */
  /* filter: hue-rotate(180deg);
-webkit-filter: hue-rotate(180deg); */
}


#slider a:hover .card {
  background-color: #20d3c2;
  color: var(--white-color);
}

a img:last-child {
  display: none;
}
a:hover img:last-child {
  display: block;
}
a:hover img:first-child {
  display: none;
}
</style>