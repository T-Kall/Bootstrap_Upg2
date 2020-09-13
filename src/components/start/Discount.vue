<template>
  <div id="discount" class="bg-darkgray-color mt-5 mb-5">
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center align-items-center">
        <div id="" class="col-8 col-md-5 col-xl-3  ">
          <div id="offer" class="text-center bg-theme-color white-color ml-1 mr-1"> 
            <h1 class="white-color">
              30%
              <span>OFF</span>
            </h1>
            <p>For new customer</p>
            <p>
              <a class="btn btn-dark" href="#" role="button">Shop now</a>
            </p>
         </div>
        </div>

        <div class="col-md-1 col-xl-3 d-none d-md-block"></div>

        <div class="col-md-6 d-none d-md-block white-color">
          <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>

          <div>
            <button type="button" class="btn btn-white">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Discount",
};
</script>

<style scoped>
/* #discount  {
 padding: 0px 0;
}  */

#offer {
  padding: 8rem 0;
}

#offer h1 {
  font-weight: 900;
}

#offer h1 span {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
}

#offer p {
  color: white;
  text-transform: uppercase;
}

/* .rounded-pill {
  border-radius: 1rem
} */
</style>