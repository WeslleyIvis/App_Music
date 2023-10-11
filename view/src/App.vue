<template>
   <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div>
      <Header />
    </div>
  
</template>


<script lang="ts">

import { defineComponent } from 'vue';

import Header from './views/Header.vue'

export default defineComponent({
  components: {
    Header
  },

})

</script>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
