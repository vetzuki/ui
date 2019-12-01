<template>
    <div class="minimal">
        <slot></slot>
        <slot></slot>
    </div>
</template>
<script>

export default {
    name: 'Minimal',
}
</script>
<style scoped>
.minimal {
    display: grid;
    grid-template-columns: 140px 1000px 140px;
    grid-template-rows: 3px 400px 47px 100px;
}
</style>