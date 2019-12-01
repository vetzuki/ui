<template v-slot:call-to-action>
    <div class="call-to-action">
        {{text}}
    </div>
</template>
<script>
export default {
    name: 'CallToAction',
    props: {
        text: String,
    }
}
</script>
<style>
.call-to-action {
    width: 333px;
    height: 100px;
    grid-column: 2/3;
    grid-row: 4/5;
    margin: auto;
    text-align: center;
    padding-top: 31px;
    font-size: 2em;
}
</style>