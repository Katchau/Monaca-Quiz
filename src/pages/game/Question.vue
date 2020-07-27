<template>
    <f7-page id="question-page">
        <f7-navbar>
            <f7-nav-left >
                <f7-button @click="retBack()">
                    Give Up
                </f7-button>
            </f7-nav-left>
            <f7-nav-right>
                <button class="help-button">
                    50/50
                </button>
                <img alt="group-help" src="/src/assets/help2.png"/>
                <img class="help-button" alt="cell-help" src="/src/assets/help3.png"/>
            </f7-nav-right>
        </f7-navbar>
        <f7-card id="question-body">
            <f7-card-header>
                <h1 class="question-box">
                    {{question}}
                </h1>
            </f7-card-header>
            <f7-card-content>
                <ul class="answers">
                    <li class="answer" v-for="(answer, i) in answers" :key="'answer' + i">
                        <button class="question-box" >
                            {{answer.text}}
                        </button>
                    </li>
                </ul>
            </f7-card-content>
        </f7-card>
    </f7-page>
</template>

<script>
    export default {
        name: "Question",

        props: ['question', 'answers'],

        methods: {
            retBack() {
                this.$f7router.back()
            }
        }
    }
</script>

<style scoped>

</style>
