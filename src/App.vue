<template>
  <div class="app">
    <Header />
    <router-view class="view"></router-view>
    <Footer />
  </div>
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
<style>
/* @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap'); */
.color-title {
  color: #96BAE3;
}
.font-primary {
  font-family: 'Helvetica';
}
.color-primary {
  color: rgba(98, 223, 181, 0.82);
}
.color-faded {
  color: #707070;
}
.color-white {
  color: white;
}
.background-primary {
  background-color: rgba(98, 223, 181, 0.82);
}
.shadow-one-level {
  color: rgba(0, 0, 0, 0.16);
}
.thin-border {
  border: 1px solid #707070;
}
.box-shadow {
  box-shadow: 0 3px 6px  rgba(0, 0, 0, 0.16);
}
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}
.app {
  display: grid;
  grid-template-columns: 1280px;
  grid-template-rows: 200px 550px auto 100px;
}
.view {
  margin: auto;
  width: 1280px;
  height: 100%;
  grid-row-start: 2;
  grid-row-end: 4;
}
</style>