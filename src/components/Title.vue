<template>
  <h1 class="title color-title">{{ title }}</h1>
</template>
<script>
export default {
    name: 'Title',
    props: {title: String}
}
</script>
<style scoped>
.title {
    font-size: 2.2em;
    font-family: 'Montserrat';
}
</style>