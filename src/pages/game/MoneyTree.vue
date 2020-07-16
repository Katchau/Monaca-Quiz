<template>
    <f7-page>
        <ul class="score-table">
            <li v-for="(prize, i) in prizes" :key="i">
                <MoneyComponent :number="i + 1" :prize="prize" :currentState="currentState" />
            </li>
        </ul>
    </f7-page>
</template>

<script>
import MoneyComponent from "@/pages/game/MoneyComponent";
    export default {
        name: "MoneyTree",

        components: {
            MoneyComponent
        },

        props: ['currentState'],

        data () {
            return {
                prizes: [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]
            }
        }
    }
</script>

<style scoped>

</style>
