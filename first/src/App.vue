<template>
    <div id="topbar">
      <div class="icon"><p>Windows <span>Report</span></p></div>
      <div class="otherIcon">
        <div class="search"><img src=".\assets\magnifying-glass-solid.svg" alt="">search</div>
        <div class="youtube"><img src=".\assets\youtube-brands.svg" alt=""></div>
      </div>
      <Navigation/>
    </div>
</template>

<script>

import Navigation from './components/Navigation.vue'

export default {
  componets: { Navigation }

}
</script>

<style>
  #topbar{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
  } 
  #topbar .icon{
    margin:0 auto 0 30px;
  }
  #topbar .icon p{
    font-size: 2rem;
  }
  #topbar .icon p span{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  #topbar img{
    height: 20px;
    width: auto;
  }
  #topbar .otherIcon{
    display: flex;
    align-items : center;
    font-size: 1.4rem;
  }
  #topbar .otherIcon .search{
    margin-right: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-right: 10px;
    border-right: 1px solid #333;
  }
  #topbar .otherIcon .youtube{
    margin-right: 20px;
  }
</style>