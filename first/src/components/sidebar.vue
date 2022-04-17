<template>
    <div class="sidebar">
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
        <a href="#">random shit</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .sidebar{
    display: flex;
    flex-direction: column;
    min-width: 25%;
    background: greenyellow;
    justify-content: space-around;
    align-items: center;
  }
  a{
      text-align: center;
      width: 100%;
      height: 100%;
      padding-top: 10px;
      color: black;
      text-decoration: none;
      transition: all .3s ease-in-out;
  }
  a:hover{
      background: cyan;
  }
</style>