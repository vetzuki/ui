<template v-slot:main>
    <Card class="main">
        <slot></slot>
    </Card>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    name: 'MainCard',
    components: {
        Card
    },
}
</script>
<style scoped>
.main {
    width: 100%;
    height: 400px;
    grid-column: 2/3;
    grid-row: 2/3;

    display: grid;
    grid-template-columns: 1000px;
    grid-template-rows: 93px 300px 7px;

    overflow: hidden;
    overflow-y: auto;
}
</style>