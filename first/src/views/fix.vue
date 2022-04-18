<template>
  <div class="viewsDiv">
     <main-content/>
  </div>
</template>

<script>


import mainContent from '../components/mainContent.vue'
export default {
  components: { mainContent },
  data(){
    return{
      text: 'this is the fix view'
    }
  },
}
</script>

<style>

</style>