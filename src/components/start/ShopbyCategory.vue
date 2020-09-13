<template>
  <div class="mt-5 container text-center">
    <h1 class="text-center">
      Shop by
      <span>category</span>
    </h1>
    <hr class="zigzag" />
    <p>We always try to give you the best product within a fast and reliable way</p>

    <div class="gallery">
      <figure class="gallery_item gallery_item-1">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Men</div>
        </div>
      </figure>

      <figure class="gallery_item gallery_item-2">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Women</div>
        </div>
      </figure>
      <figure class="gallery_item gallery_item-3">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Kids</div>
        </div>
      </figure>
      <figure class="gallery_item gallery_item-4">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Shoes</div>
        </div>
      </figure>
      <figure class="gallery_item gallery_item-5">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Hats</div>
        </div>
      </figure>
      <figure class="gallery_item gallery_item-6">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">
            Sunglasses
            <p>18 products</p>
          </div>
        </div>
      </figure>
      <figure class="gallery_item gallery_item-7">
        <div class="gallery_img">
          <div class="capOwerlay text-left p-1">Watches</div>
        </div>
      </figure>
    </div>
  </div>
</template>


<script >
export default {
  name: "ShopbyCategory",
};
</script>




<style scoped>
/* .gallery {
  display: none;
} */


  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, 50vw);
    gap: 1.5em;
  }

  .gallery_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-color: #cccccc;
    border-radius: 8px;
  }

  .gallery_item-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
  }

  .gallery_item-2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;
  }

  .gallery_item-3 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    position: relative;
  }

  .gallery_item-4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    position: relative;
  }

  .gallery_item-5 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
    position: relative;
  }

  .gallery_item-6 {
    grid-column: 1 / span 1;
    grid-row: 6 / span 1;
    position: relative;
  }

  .gallery_item-7 {
    grid-column: 1/2;
    grid-row: 7/8;
    position: relative;
  }

  .capOwerlay {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: var(--dark-color);
    border-radius: 0 8px;
    width: 50%;
    color: var(--theme-color);
  }

  .capOwerlay p {
    margin: 0;
    color: var(--white-color);
    font-size: 0.8em;
  }




/* ----------------------------------------- */
/* MEDIA sm */
/* ----------------------------------------- */

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-md */
/* ----------------------------------------- */

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
    max-width: 720px;
  }


  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 25vw);
    gap: 1.5em;
  }

  .gallery_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-color: #cccccc;
    border-radius: 8px;
  }

  .gallery_item-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
  }

  .gallery_item-2 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
  }

  .gallery_item-3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 5;
    position: relative;
  }

  .gallery_item-4 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    position: relative;
  }

  .gallery_item-5 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
    position: relative;
  }

  .gallery_item-6 {
    grid-column: 1 / span 1;
    grid-row: 5 / span 1;
    position: relative;
  }

  .gallery_item-7 {
    grid-column: 2/4;
    grid-row: 5/6;
    position: relative;
  }

  /* .capOwerlay {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: var(--dark-color);
    border-radius: 0 8px;
    width: 50%;
    color: var(--theme-color);
  }

  .capOwerlay p {
    margin: 0;
    color: var(--white-color);
    font-size: 0.8em;
  } */




}

/* ----------------------------------------- */
/* MEDIAmd-lg */
/* ----------------------------------------- */

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 960px;
  }


  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    grid-template-rows: repeat(3, 14vw);
    gap: 1.5em;
  }

  .gallery_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-color: #cccccc;
    border-radius: 8px;
  }

  .gallery_item-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
  }

  .gallery_item-2 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
  }

  .gallery_item-3 {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
  }

  .gallery_item-4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    position: relative;
  }

  .gallery_item-5 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;
  }

  .gallery_item-6 {
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
    position: relative;
  }

  .gallery_item-7 {
    grid-column: 5/6;
    grid-row: 3/4;
    position: relative;
  }

  /* .capOwerlay {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: var(--dark-color);
    border-radius: 0 8px;
    width: 50%;
    color: var(--theme-color);
  }

  .capOwerlay p {
    margin: 0;
    color: var(--white-color);
    font-size: 0.8em;
  } */


}

/* ----------------------------------------- */
/* MEDIA sm-xl */
/* ----------------------------------------- */
@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1140px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-xxl*/
/* ----------------------------------------- */

@media (min-width: 1400px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl,
  .container-xxl {
    max-width: 1320px;
  }
}
</style>