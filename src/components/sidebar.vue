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
    background: #E8A87C;
    justify-content: space-around;
    align-items: center;
  }
  a{
      text-align: center;
      width: 100%;
      height: 100%;
      padding-top: 13px;
      color: black;
      text-decoration: none;
      transition: all .3s ease-in-out;
  }
  a:hover{
      background: #7EC3B0;
  }
</style>