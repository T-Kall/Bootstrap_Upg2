<template>

   <span>
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">

         <!-- pluppar -->

          
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      
        </ol> 

         <div class="carousel-inner " role="listbox">

            <!-- start slide 1  -->

            <!-- <div class="carousel-item active" style="background-image: url('../../assets/img/SliderComponent.png')"> -->
            <div class="carousel-item active">
            <img src="../../assets/img/SliderComponent.png" class="" alt="...">
               <div class="container carousel-caption row ">
              
                  <div class="text-left col-10 col-md-6 col-lg-5">
                     <h2>Shopping is</h2> <h1 class="theme-color">more fun</h1>
                     <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
                     <p><a class="btn btn-lg btn-primary" href="#" role="button">Shop now</a></p>
                  </div>

                  <!-- <div class="col-12 col-md-6 "> img </div> -->
               </div>
            </div>
 <!-- end slide 1  -->


             <!-- start slide 2  -->

            <!-- <div class="carousel-item active" style="background-image: url('../../assets/img/SliderComponent.png')"> -->
            <div class="carousel-item">
            <img src="../../assets/img/SliderComponent.png" class="" alt="...">
               <div class="container carousel-caption row ">
              
                  <div class="text-left col-10 col-md-6 col-lg-5">
                     <h2>Praesent sodales</h2> <h1 class="theme-color">nec rhoncus</h1>
                     <p>Sed tincidunt dictum tortor eu venenatis. Integer arcu dolor, malesuada ut ipsum a, eleifend feugiat lorem. </p>
                     <p><a class="btn btn-lg btn-primary" href="#" role="button">Shop now</a></p>
                  </div>

                  <!-- <div class="col-12 col-md-6 "> img </div> -->
               </div>
            </div>
 <!-- end slide 2  -->



         </div>

         <!-- pilar -->

       <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
         </a>  -->

      </div>
   </span>
    
</template>


<script>
export default {
      name: 'JumboCarousel',

}

$('.carousel').carousel({
  interval: 2000
})
</script>

<style>

  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  

  .carousel {
    margin-bottom: 4rem;
  }

  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
    color: var(--dark-color);
  }

.carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    line-height: 1.4;
}

.carousel-caption h1 {
  font-weight: 900;
  text-transform: uppercase;
  margin: -0.5rem 0 1rem 0;
  
}

.carousel-caption h2 {
   font-size: 2.75rem;
  font-weight: 500;

}
  
  
  .carousel-item {
    height: 32rem;
  }
  
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }


  
 .carousel-caption  .btn {
    display: inline-block;
    background-color: var(--white); 
    color:  var(--theme-color); 
  }
  
  .carousel-caption  .btn:hover {
    background-color: var(--dark-color);
   color: var(--white); 
    border: 1px solid transparent;
    outline: 0;  
  }
  
  

.carousel-indicators li {
    height:10px;
    width: 10px;
    border-radius: 50%;
    background-color: var(--bulletline-color);
}

.carousel-indicators li.active {
      background-color: var(--theme-color);
}



  

  
  

  




</style>