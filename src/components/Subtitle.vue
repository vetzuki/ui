<template>
  <h1 class="subtitle color-title font-primary">{{ title }}</h1>
</template>
<script>
export default {
    name: 'Subtitle',
    props: {title: String}
}
</script>
<style scoped>
.subtitle {
    font-size: 1.6em;
}
</style>