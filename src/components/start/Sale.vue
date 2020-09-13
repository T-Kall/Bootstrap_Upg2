<template>
  <div id="discount" class="bg-dark-color mt-5 mb-5  pb-xl-5">
    <div class="container mt-5 mb-5">

      <div class="row justify-content-center align-items-center ">
        <div id="sale" class="col-8 col-md-12 col-xl-3 mb-xl-5">
          <div id="offer" class="text-center bg-theme-color white-color ml-1 mr-1 pb-5">
          <h1 class="white-color">
            Flash
            <br />sale
          </h1>
          <p>Up to 50% off</p>

           </div>
        </div>

        <div class="col-xl-3 d-none d-xl-block"></div>

        <div class="col-12 col-lg-9 col-xl-6 d-none d-xl-block text-center ">
          <div class="d-flex flex-wrap justify-content-center align-self-center  pb-4">
            <div class="circle">
              <span>
                <h2 class="theme-color">7</h2>Days
              </span>
            </div>

            <div class="circle">
              <span>
                <h2 class="theme-color">23</h2>Hours
              </span>
            </div>

            <div class="circle">
              <span>
                <h2 class="theme-color">46</h2>Minutes
              </span>
            </div>

            <div class="circle">
              <span>
                <h2 class="theme-color">12</h2>Seconds
              </span>
            </div>

          </div>
          <div style="">
            <button type="button" class="btn btn-white">Shop now</button>
          </div>

        </div>
      </div>

<!--ny rad-->
      <!-- <div class="row border">
        <div class="col-12 col-md-4 col-lg-3 text-center border"></div>
        <div class="col-md-1 col-lg-3 d-none d-md-block"></div>
        <div class="col-12 col-lg-6 text-center border pt-3 pb-5">
          <div style="">
            <button type="button" class="btn btn-white">Shop now</button>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>


<script>
export default {
  name: "Sale",
};
</script>

<style scoped>
/* #discount  {
 padding: 0px 0;
}  */

#offer {
  padding: 5rem 0 2rem 0;
  /* margin-bottom: 5rem; */
}

#sale h1 {
  font-weight: 900;
}

#sale h1 span {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
}

#sale p {
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
}

/* .circle {
  background: var(--white-color);
  width: 100px;
  height: 100px;;
  margin: 10px;
  color: var(--theme-color);
  text-align: center;
  border-radius: 50px;
  border: 1px dashed  var(--theme-color);
} */

/* .rounded-pill {
  border-radius: 1rem
} */

/*  Test */

/* .circle {
  position: relative;
  width: 20%;
  height: 0;
  padding: 10% 0;
  margin: 1em auto;
  border-radius: 50%;
  background: #a7cd80;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.content:before {
  content: '';
  vertical-align: middle;
  display: inline-block;
  width: 0;
  height: 100%;
}

.content span {
  vertical-align: middle;
  display: inline-block;
} */

/*  Test */

.circle {
  width: 7vw;
  height: 7vw;
  background: var(--white-color);
  margin: 0.5rem;
  border: 3px dotted var(--theme-color);
  border-radius: 50%;
}

.circle:before {
  content: "";
  vertical-align: middle;
  display: inline-block;
  width: 0;
  height: 100%;
}
.circle span {
  vertical-align: middle;
  display: inline-block;
}

.circle span h2 {
  margin-bottom: -1rem;
}
</style>