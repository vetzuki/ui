<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <Header
          v-bind:isAuthenticated="isAuthenticated"
          v-bind:logout="logout"
          v-bind:login="login"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view class="h-80"></router-view>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "app",
  data() {
    return {
      isAuthenticated: false
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};
</script>
<style scoped>
.h-80 {
  height: 80vh !important;
  background-color: #f9f871;
}
</style>