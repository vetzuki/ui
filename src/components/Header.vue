<template>
  <b-nav class="header navbar navbar-expand-lg navbar-dark bg-dark">
      <b-nav-item>
          <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/employer">My Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <a v-if="isAuthenticated" href="/logout" @click.prevent="logout">Logout</a>
        <router-link v-if="!isAuthenticated" to="/employer" @click.prevent="login">Login</router-link>
      </b-nav-item>
  </b-nav>
</template>

<style scoped>
    .header {
        background-color: #677381;
    }
</style>

<script>
export default {
    data() {
        return {}
    },
    props: {
        logout: Function,
        login: Function,
        isAuthenticated: Boolean,
    }
}
</script>