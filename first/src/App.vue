<template>
    <topbar/>
    <Navigation />
</template>

<script>

import topbar from './components/topbar.vue'
import Navigation from './components/Navigation.vue'
import './assets/global.css';

export default {
  components: { topbar, Navigation},
  data() {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick() {
      alert('You clicked me!')
    }
  }

}
</script>

<style>
  
</style>