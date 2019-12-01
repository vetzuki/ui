<template>
    <div class="header">
        <Title :title="'VetZuki'" class="title" />
        <Hamburger class="hamburger"/>
    </div>
</template>
<script>
import Title from '@/components/Title.vue'
import Hamburger from '@/components/Hamburger.vue'
export default {
    name: 'Header',
    components: {
        Title,
        Hamburger,
    }
}
</script>
<style scoped>
.title {
    margin-left: 40px;
    margin-top: 43px;
}
.hamburger {
    margin-top: 43px;
    margin-right: 60px;
}
.header {
    display: flex;
    justify-content: space-between;
}

</style>