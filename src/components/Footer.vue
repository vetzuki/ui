<template>
  <b-nav class="nav bg-dark">
    <b-nav-item>
      <router-link class="nav-link" to="/about">About</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link class="nav-link" to="/contact">Contact</router-link>
    </b-nav-item>
    <b-nav-text class="text-light mt-2 ml-auto mr-1">
      © 2019 VetZuki. All rights reserved
    </b-nav-text>
  </b-nav>
</template>

<style scoped>
    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
</style>

<script>
export default {
    data() {
        return {}
    },
    props: {
    }
}
</script>
