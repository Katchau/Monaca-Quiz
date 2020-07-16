<template>
    <div :class="currentState === number ? 'table-elem selected' : 'table-elem'">
        <p>{{number}}. </p>
        <div :class="currentState >= number ? 'circle passed' : 'circle'" />
        <p>${{prize}}</p>
    </div>
</template>

<script>
    export default {
        name: "MoneyComponent",

        props: ['number', 'prize', 'currentState'],
    }
</script>

<style scoped>

</style>
