<template>

  <div id="app">
    <Top />
    <router-view />
     <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src

import Top from '@/components/top/Top.vue'
import Footer from "@/components/footer/Footer.vue";

export default {
  name: 'App',
  components: {
    Top,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
