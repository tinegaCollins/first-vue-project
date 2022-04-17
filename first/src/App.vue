<template>
    <topbar/>
    <Navigation />
    <main>
          <sidebar v-if="showSideBar"/>
          <router-view/>
    </main>
</template>

<script>

import topbar from './components/topbar.vue'
import Navigation from './components/Navigation.vue'
import sidebar from './components/sidebar.vue'
import './assets/global.css';

export default { 
  components: { topbar, Navigation, sidebar },
  props: ['showSideBar'],
}
</script>

<style>
  main{
    margin-top: 30px;
    background-color: red;
    min-height: 80vh;
    display: flex;
  }

</style>