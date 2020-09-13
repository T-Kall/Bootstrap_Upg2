<template>
  <div class="bg-gray-color mt-5 mb-5">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12 col-md-6 pt-5 pb-5 text-center text-md-left pr-md-5 ">
          <div>
            <h1>
              Subscribe
              <span>now</span>
            </h1>
            <p>
              Signup for awesome news about our new products and
              know our special discounts on products.
            </p>
          </div>
          <div>
            <div id="subscribe" class>
              <div class="input-group row">
                <div class="col col-md-8">
                  <input
                    type="text"
                    class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Enter email address" />
                </div>
                <button type="button" class="btn sub ml-n5">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 d-none d-md-block bg-darkgray-color"></div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Subscribe",
};
</script>

<style scoped>
#subscribe {
  border-color: var(--bulletline-color);
}

#subscribe .sub {
  color: var(--white);
  background-color: var(--theme-color);
  border-radius: 50px 50px;
  border: 0;
    padding: 0.2rem 1.5rem;
  z-index: 2;
}

#subscribe .sub:hover {
  background-color: var(--dark-color);
  color: var(--white);
  outline: 0;
}

.form-control {
  border-radius: 50px 0 0 50px !important;
  z-index: 1;
}

/* .rounded-pill {
  border-radius: 1rem
} */

</style>

