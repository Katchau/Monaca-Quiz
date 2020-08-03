<template>
    <f7-page>
        <div v-if="state === 'lost'">
            <h1>
                Shame, you Lost ...
            </h1>
            <p>
                Ter uma imagem aqui?
            </p>
        </div>
        <div v-else-if="state === 'won'">
            <h1>
                Congratulations, you won the grand prize of 1 Million Dollars!
            </h1>
            <p>
                Image and animation missing
            </p>
        </div>
        <div v-else>
            <h1>
                Congrats, you won {{ money }} Dollars! Try again for better results!
            </h1>
        </div>
    </f7-page>
</template>

<script>
    export default {
        name: "End",

        props: ['state', 'money']
    }
</script>

<style scoped>

</style>
