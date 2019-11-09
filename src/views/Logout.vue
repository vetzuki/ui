<template>
  <div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogoutEvent(data) {
      this.$router.push(data.state.target || "/");
    }
  },
//   created() {
//     this.$auth.logOut()
//   }
};
</script>