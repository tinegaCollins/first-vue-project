<template>
    <topbar/>
    <Navigation />
    <main>
          <router-view/>
    </main>
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
    //function to get a random number between two numbers
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //function to get a random color
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    //create facebook like button
    createFacebookLikeButton() {
      var button = document.createElement('div');
      button.className = 'fb-like';
      button.setAttribute('data-href', 'https://www.facebook.com/vuejs');
      button.setAttribute('data-layout', 'button_count');
      button.setAttribute('data-action', 'like');
      button.setAttribute('data-size', 'small');
      button.setAttribute('data-show-faces', 'true');
      button.setAttribute('data-share', 'true');
      return button;
    },

  }

}
</script>

<style>
  /*center that div*/
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>