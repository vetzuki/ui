<template>
  <div class="hamburger">
      <ul>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
</template>
<script>
export default {
    name: 'Hamburger',
}
</script>
<style scoped>
.hamburger ul li {
    list-style-type: none;
    height: 5px;
    width: 40px;
    margin-top: 2px;
    background-color: black;
}
</style>