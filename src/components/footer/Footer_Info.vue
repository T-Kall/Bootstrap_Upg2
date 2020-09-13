<template>
  <div class="bg-dark-color white-color">
    <div class="container pt-5 pb-5">
      <div class="row">
        <!-- Maincol 1 -->
        <div class="col-12 col-md-6 col-lg-3 mb-5">
          <div class="mb-4">
            <img src="../../assets/img/footer/LogoWhite.png" />
          </div>

          <div class="info-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="row align-items-center">
                <div class="col-auto pl-3  pr-2">
                  Follow us
                </div>
                <div class="line col-auto  p-0">
                  <hr />
                </div>
              </div>

              <div class="col-12">
                <div class="social row align-items-center">
                  <a href="#"><i class="fab fa-facebook-f m-1 pr-2"></i></a>

                  <a href="#"><i class="fab fa-twitter m-1 pr-2"></i></a>

                 <a href="#"> <i class="fab fa-instagram m-1 pr-2"></i></a>

                  <a href="#"><i class="fab fa-pinterest-p m-1 pr-2"></i></a>

                 <a href="#"> <i class="fab fa-youtube m-1 pr-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Maincol 2 -->
       <div class="col-12 col-md-6 col-lg-3 mb-3">
          <div class="mb-3">
            <h5>Contact info</h5>
          </div>
          <div class>
            <span>Adress:</span>
            <p>
              Solna Business
              <br />Park
              Feni-2500, Stockholm
            </p>
          </div>
          <div class>
            <span>Adress:</span>
            <p>
              +08-123456789
              <br />+08-123456789
            </p>
          </div>
          <div class>
            <span>Email:</span>
            <p>
              <a href="mailto:support@website.com">support@website.com</a>
              <br />
              <a href="mailto:info@website.com">info@website.com</a>
            </p>
          </div>
        </div>
        <!-- Maincol 3 -->
        <div class="col-12 col-md-6 col-lg-3 mb-3">
          <div class="mb-3">
            <h5>Useful links</h5>
          </div>

          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a class href="#">Privacy Policy</a>
            </li>
            <li class="nav-item mb-2">
              <a class href="#">Terms & Conditions</a>
            </li>
            <li class="nav-item mb-2">
              <a class href="#">Contact Us</a>
            </li>
            <li class="nav-item mb-2">
              <a class href="#">Our Sitemap</a>
            </li>
            <li class="nav-item mb-2">
              <a class href="#">Latest News</a>
            </li>
            <li class="nav-item mb-2">
              <a class href="#">Returns</a>
            </li>
          </ul>
        </div>
        <!-- Maincol 4 -->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="mb-3">
            <h5>Recent Instagram</h5>
          </div>

          <div class="insta">
            <div class="insta_item"></div>

            <div class="insta_item"></div>

            <div class="insta_item"></div>

            <div class="insta_item"></div>

            <div class="insta_item-5">
              <p class>
                <i class="fab fa-instagram"></i>
              </p>
            </div>

            <div class="insta_item"></div>

           <div class="insta_item"></div>

            <div class="insta_item"></div>

            <div class="insta_item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FooterInfo",
};
</script>

<style scoped>
.info-text {
  font-size: 0.85rem;
  line-height: 1.5rem;
}

h6 {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  font-weight: 400;
}

hr {
  border: 1px solid var(--theme-color);
  width: 4rem;
}

.social a:link,
.social a:visited {
  color: var(--theme-color);
  text-decoration: none;
}

.social a:hover,
.social a:active {
  color: var(--white-color);
  text-decoration: none;
}

h5 {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.4rem;
  color: var(--theme-color);
}

span {
  color: var(--theme-color);
}

p {
  line-height: 1.5rem;
}

a:link,
a:visited {
  color: var(--white-color);
  text-decoration: none;
}

a:hover,
a:active {
  color: var(--theme-color);
  text-decoration: underline;
}

/* instacol*/

.insta {
  display: grid;
  grid-template-columns: repeat(3, 60px);
   /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-rows: repeat(3, 5.8vw); */
  grid-template-rows: repeat(3, 60px);
   /* grid-template-rows: repeat(3, 5rem); */
  grid-gap: 0.7rem;
  height: auto;
  /* background-color: #2196f3; */
  /* padding: 0.5rem; */
}

.insta div {
  background: var(--gray-color-c);
  border-radius: 8px;
}

.insta_item-5 {
  background: var(--theme-color) !important;
  position: relative;
}
.insta_item-5 p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>