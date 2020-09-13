<template>
  <div>
    <JumboCarousel />
    <Slider />
    <ShopbyCategory />
    <NewArrivals />
    <Discount />
    <FeaturedProducts/>
    <Sale />
    <Topsellers />
    <Testimonials />
    <LatestBlog />
    <Subscribe />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld,

//   }
// }
</script>

<script>
// @ is an alias to /src

import JumboCarousel from "@/components/start/JumboCarousel.vue";
import Slider from "@/components/start/Slider.vue";
import ShopbyCategory from "@/components/start/ShopbyCategory.vue";
import NewArrivals from "@/components/start/NewArrivals.vue";
import Discount from "@/components/start/Discount.vue";
import FeaturedProducts from "@/components/start/FeaturedProducts.vue";
import Sale from "@/components/start/Sale.vue";
import Topsellers from "@/components/start/Topsellers.vue";
import Testimonials from "@/components/start/Testimonials.vue";
import LatestBlog from "@/components/start/LatestBlog.vue";
import Subscribe from "@/components/subscribe/Subscribe.vue";

export default {
  name: "Home",
  components: {
    JumboCarousel,
    Slider,
    ShopbyCategory,
    NewArrivals,
    Discount,
    FeaturedProducts,
    Sale,
    Topsellers,
    Testimonials,
    LatestBlog,
    Subscribe,
  },
};
</script>
