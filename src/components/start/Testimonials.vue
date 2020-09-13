<template>
  <div id="testimonial" class="bg-dark-color white-color mt-5 mb-5 pb-5">
    <div class="container text-center justify-content-center ">

<div class="main mt-5  position-relative">
      <div id="owl4" class="owl-carousel owl-theme">

        
 <!-- testimonial 1 -->
        <div class="item justify-content-center">
         

          <div class="ml-auto mr-auto">
            <img src="images/Quote.png" class="quote ml-auto mr-auto mb-4" alt="Quote" />
          </div>

          <div class="mt-5 mb-4">
            <div class="person d-block ml-auto mr-auto bg-gray-color-c"></div>
          </div>

          <div class="stars3 ml-auto mr-auto">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div class="ml-auto mr-auto">
            <h5>Johny Wesmullar</h5>
            <span class="small ml-auto mr-auto">CEO, Biotech Inc.</span>
          </div>

          <div class="test pt-4 pb-4 ml-auto mr-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </div>

         



        </div>
 <!-- end testimonial 1 -->

        
 <!-- testimonial 1 -->
        <div class="item justify-content-center">
         

          <div class="ml-auto mr-auto">
            <img src="images/Quote.png" class="quote ml-auto mr-auto mb-4" alt="Quote" />
          </div>

          <div class="mt-5 mb-4">
            <div class="person d-block ml-auto mr-auto bg-gray-color-c"></div>
          </div>

          <div class="stars3 ml-auto mr-auto">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div class="ml-auto mr-auto">
            <h5>Johny Wesmullar</h5>
            <span class="small ml-auto mr-auto">CEO, Biotech Inc.</span>
          </div>

          <div class="test pt-4 pb-4 ml-auto mr-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </div>

         



        </div>
 <!-- end testimonial 1 -->

        
 <!-- testimonial 1 -->
        <div class="item justify-content-center">
         

          <div class="ml-auto mr-auto">
            <img src="images/Quote.png" class="quote ml-auto mr-auto mb-4" alt="Quote" />
          </div>

          <div class="mt-5 mb-4">
            <div class="person d-block ml-auto mr-auto bg-gray-color-c"></div>
          </div>

          <div class="stars3 ml-auto mr-auto">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div class="ml-auto mr-auto">
            <h5>Johny Wesmullar</h5>
            <span class="small ml-auto mr-auto">CEO, Biotech Inc.</span>
          </div>

          <div class="test pt-4 pb-4 ml-auto mr-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </div>

         



        </div>
 <!-- end testimonial 1 -->

    </div>  

      <div class="owl-theme">
        <div class="owl-controls">
            <div class="custom-nav owl-nav"></div>
        </div>

      </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "Testimonials",
};

//Owl

$(document).ready(function () {
  var owl = $("#owl4");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 1,
        nav: true,
      },
    },
  });
});
</script>

<style scoped>

#testimonial .quote {
    width: auto;
  height: 70px;
}

#testimonial .person {
  width: 190px;
  height: 200px;
  border-radius: 8px;
  border: 3px solid var(--white-color);
  /* display: block;
  margin-left: auto;
  margin-right: auto; */
  /* position: absolute;
  top: 0;
  left: 50%;
   transform: translate(-50%, 0);  */
}

#testimonial h5 {
  font-family: "Roboto", sans-serif;
  font-size: 1.15em;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.4rem;
  color: var(--theme-color);
}

#testimonial .stars3 {
  letter-spacing: 5px;
  color: var(--theme-color);
  /* font-size: 20px; */
  padding: 1.5rem;
}



#testimonial .test {

  width: 60%;
}



/* owl*/


#testimonial .owl-theme .owl-dots .owl-dot span {
  background: var(--bulletline-color)  !important;
    width: 10px;
  height: 10px;
 }

#testimonial  .owl-theme .owl-dots .owl-dot.active span {
  background: var(--theme-color)  !important;
 }



#testimonial #owl4 .owl-nav .owl-prev {
  position: absolute;
  left: 70px!important;
  top: 35%;
 border: none !important;
}

#testimonial #owl4  .owl-nav .owl-next {
  position: absolute;
  right: 70px !important;
  top: 35% ;
 border: none !important;
} 



#testimonial  .owl-theme .owl-nav [class*=owl-]  {
background: var(--white-color) !important;
color: var(--bulletline-color)!important;
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid var(--bulletline-color) !important;

 
}

#testimonial  .owl-theme .owl-nav [class*=owl-]:hover,
#testimonial  .owl-theme .owl-nav [class*=owl-]:active {
  background-color: var(--theme-color)  !important;
  color: var(--white-color)!important;
  border: 1px solid transparent!important;
  transition: 0.5s all;
}

#testimonial  .owl-nav .owl-next span {
 font-size: 45px;
 font-weight: 300;
  position: absolute;
  top: 6px;
  left: 20px;
 
}

#testimonial .owl-nav .owl-prev span {
font-size: 45px;
 font-weight: 300;
  position: absolute;
  top: 6px;
  right: 20px;
 
}





 
</style>