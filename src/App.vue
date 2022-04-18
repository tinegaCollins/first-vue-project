<template>
    <topbar/>
    <Navigation  @toggleside="toggleSidebar"/>
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
  data(){
    return{
      showSideBar: false
    }
  },
  methods: {
    toggleSidebar(){
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>

<style>
  main{
    margin-top: 30px;
    min-height: 80vh;
    display: flex;
  }

</style>