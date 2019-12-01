<template>
  <div class="body-list font-primary">
      <ul>
          <li v-for="item in items" :key="item">
              <Body>{{ item }}</Body>
          </li>
      </ul>
  </div>
</template>
<script>
import Body from '@/components/Body.vue'
export default {
    name: 'BodyList',
    components: {
        Body,
    },
    props: {
        items: Array,
    }
}
</script>
<style scoped>
.body-list ul li {
    list-style-type: none;
}
</style>