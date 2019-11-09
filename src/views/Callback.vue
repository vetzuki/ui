<template>
  <div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/employer");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>