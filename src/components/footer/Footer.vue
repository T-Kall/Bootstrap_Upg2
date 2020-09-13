<template>
    <div>
        
<FooterLogos/>
<FooterInfo/>
<FooterCopy/>
        
</div>
</template>


<script>
import FooterLogos from "@/components/footer/Footer_Logos.vue";
import FooterInfo from "@/components/footer/Footer_Info.vue";
import FooterCopy from "@/components/footer/Footer_Copy.vue";

export default {
      name: 'Footer',
      components: {
    FooterLogos,
    FooterInfo,
    FooterCopy
  },

}
</script>

<style>


</style>