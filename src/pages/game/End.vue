<template>
    <f7-page id="end-page">
        <div v-if="state === 'loose'" style="text-align: center">
            <img class="esbetaculo-logo" alt="loose-img" src="src/assets/loose.png"/>
            <h1>
                Shame, you Lost ...
            </h1>
        </div>
        <div v-else-if="state === 'win'" style="text-align: center">
            <img class="esbetaculo-logo" alt="win-img" src="src/assets/win.png"/>
            <h1>
                Congratulations, you won the grand prize of 1 Million Dollars!
            </h1>
        </div>
        <div v-else style="text-align: center">
            <h1>
                Congrats, you won {{ money[moneyIndex] }} Dollars! Try again for better results!
            </h1>
        </div>
    </f7-page>
</template>

<script>
    export default {
        name: "End",

        props: ['state', 'moneyIndex'],

        data() {
            return{
                money: [0, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]
            }
        }
    }
</script>

<style scoped>

</style>
